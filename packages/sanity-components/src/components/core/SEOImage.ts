import { defineField } from "sanity";

export const SEOImage = defineField({
	name: 'card',
	type: 'image',
	title: 'Sharing Image',
	description: "Used on site embedding preview. Optimal size is at 1200px x 600px"
});
