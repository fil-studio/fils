import { defineField, defineType } from "sanity";
import { SEOImage } from "./SEOImage";

export const LocalizedSEO = defineType({
    name: 'seo',
    title: "SEO",
    type: "object",
    fields: [
        defineField({
            name: 'title',
            type: 'internationalizedArrayString'
        }),
        defineField({
            name: 'description',
            type: 'internationalizedArrayText'
        }),
        SEOImage
    ]
});
