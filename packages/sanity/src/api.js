const groq = require("groq");
const { client } = require("./client.js");

async function getCustomQuery(query) {
	const filter = groq`${query}`;
	const docs = await client.fetch(filter).catch((err) => console.error(err));
	if(!docs) return [];
	return docs;
}

async function getPage(id) {
	const filter = groq`*[_type == "${id}" && !(_id match "*drafts*") ][0]`;
	const docs = await client.fetch(filter).catch((err) => console.error(err));
	if (!docs) return [];
	return docs;
}

async function getPosts(id, order = "asc") {
    const o = (order === 'asc' || order === 'desc') ? `_createdAt ${order}` : order;
	const filter = groq`*[_type == "${id}" && !(_id match "*drafts*") ] | order(${o})`;
	const docs = await client.fetch(filter).catch((err) => console.error(err));
	if (!docs) return [];
	return docs;
}

async function deletePost(type, id) {
	// const filter = groq`*[_type == "${type}" && _id == "${id}"][0]`;
	const docs = await client.delete({
		query: `*[_type == "${type}" && _id == "${id}"][0]`
	}).catch((err) => console.error(err));
	return docs;
}

function slugify(str, grp) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
	str = str.toLowerCase(); // convert string to lowercase
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

module.exports = {
	getCustomQuery,
	getPage,
	getPosts,
	deletePost,
	slugify
}
