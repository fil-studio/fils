import { Rule } from "sanity";

/**
* Deprecated use Sanity's Rule.uri instead!!
* @returns regexp url validator
*/
export function urlValidation() {
	return (rule:Rule) =>
		rule.custom((url:string) => {
			if (typeof url === 'undefined' || url === null) {
				return true; // Allow undefined values
			}

			const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
			return regex.test(url) ? true : 'Not a valid URL';
		});
}
