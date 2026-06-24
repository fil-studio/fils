import { defineField } from "sanity";

export const SEOImage = defineField({
	name: 'image',
	type: 'image',
	title: 'Sharing Image',
	description: 'Used on site embedding preview. Recommended size: 1200x630px.'
});
