import { defineField, defineType } from "sanity";
import { SEOImage } from "./SEOImage";

export const SEO = defineType({
    name: 'seo',
    title: "SEO",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        SEOImage
    ]
});

export const LocalizedSEO = defineType({
    name: 'localseo',
    title: "SEO",
    type: "document",
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
