import groq from "groq";
import { sanityClient } from "./client";

export async function getCustomQuery(query:string) {
	const filter = groq`${query}`;
	const docs = await sanityClient.fetch(filter).catch((err) => console.error(err));
	if(!docs) return [];
	return docs;
}

export async function getPage(id:string) {
	const filter = groq`*[_type == "${id}" && !(_id match "*drafts*") ][0]`;
	const docs = await sanityClient.fetch(filter).catch((err) => console.error(err));
	if (!docs) return [];
	return docs;
}

type GetPostsOptions = { order?: string; filter?: string };

export async function getPosts(id:string, orderOrOptions: string | GetPostsOptions = "asc") {
    let order: string;
    let extraFilter: string = "";

    if (typeof orderOrOptions === 'object') {
        order = orderOrOptions.order ?? "asc";
        extraFilter = orderOrOptions.filter ?? "";
    } else {
        order = orderOrOptions;
    }

    const o = (order === 'asc' || order === 'desc') ? `_createdAt ${order}` : order;
    const extra = extraFilter ? ` && ${extraFilter}` : "";
	const filter = groq`*[_type == "${id}" && !(_id match "*drafts*")${extra}] | order(${o})`;
	const docs = await sanityClient.fetch(filter).catch((err) => console.error(err));
	if (!docs) return [];
	return docs;
}

/**
 * Deletes all image and file assets that are not referenced by any document.
 * Safe to run after a deploy — unreferenced assets are orphans left by
 * replaced uploads. Returns the number of assets deleted.
 */
export async function cleanUnusedAssets(): Promise<number> {
  const assets = await sanityClient.fetch<{_id: string; _type: string; originalFilename?: string}[]>(
    `*[_type in ["sanity.imageAsset", "sanity.fileAsset"] && !defined(*[references(^._id)][0])]{_id, _type, originalFilename}`
  )
  if (!assets.length) {
    console.log('No unused assets found.')
    return 0
  }
  console.log(`Deleting ${assets.length} unused asset(s)…`)
  await Promise.all(assets.map(a => sanityClient.delete(a._id)))
  console.log(`✅ Deleted ${assets.length} unused asset(s).`)
  return assets.length
}

export async function deletePost(type:string, id:string) {
	// const filter = groq`*[_type == "${type}" && _id == "${id}"][0]`;
	const docs = await sanityClient.delete({
		query: `*[_type == "${type}" && _id == "${id}"][0]`
	}).catch((err) => console.error(err));
	return docs;
}

const specialChars: Record<string, string> = {};
specialChars['à'] = 'a';
specialChars['á'] = 'a';
specialChars['è'] = 'e';
specialChars['é'] = 'e';
specialChars['ì'] = 'i';
specialChars['í'] = 'i';
specialChars['ò'] = 'o';
specialChars['ó'] = 'o';
specialChars['ù'] = 'u';
specialChars['ú'] = 'u';
specialChars['ç'] = 'c';
specialChars['ñ'] = 'n';
specialChars['ö'] = 'oe';
specialChars['ü'] = 'ue';
specialChars['ä'] = 'ae';
specialChars['ß'] = 'ss';

export function slugify(str:string, grp:string[]) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
	str = str.toLowerCase(); // convert string to lowercase
	//replace special char for equivalents
	for(const key in specialChars) {
    str = str.replaceAll(key, specialChars[key]);
	}
	str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
			 .replace(/\s+/g, '-') // replace spaces with hyphens
			 .replace(/-+/g, '-'); // remove consecutive hyphens
	if(grp) {
		let i = 2
		let nstr = str;
		while(grp.indexOf(nstr) > -1) {
			nstr = `${str}-${i++}`;
		}
		str = nstr;
		grp.push(str);
	}
	return str;
}
