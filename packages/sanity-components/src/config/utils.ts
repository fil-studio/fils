import { defineConfig, DocumentActionComponent, DocumentActionsContext } from "sanity"
import {StructureResolver, structureTool} from 'sanity/structure'
import { netlifyWidget, SiteWidgetOption } from "sanity-plugin-dashboard-widget-netlify";
import { dashboardTool } from '@sanity/dashboard';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

export function getActions(singletonTypes:Set<string>) {
	return (input: DocumentActionComponent[], context: DocumentActionsContext) =>
		singletonTypes.has(context.schemaType)
			? input.filter(({ action }) => action && singletonActions.has(action))
			: input;
}

export function getDefaultConfig(projectId:string, title:string, structure:StructureResolver, schemaTypes:any, singletonTypes:Set<string>) {
	return defineConfig({
		name: 'default',
		title,

		projectId,
		dataset: 'production',

		scheduledPublishing: {
			enabled: false
		},

		plugins: [structureTool({
			structure
		})],

		schema: {
			types: schemaTypes,
			// Filter out singleton types from the global “New document” menu options
			templates: (templates) =>
				templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
		},

		document: {
			// For singleton types, filter out actions that are not explicitly included
			// in the `singletonActions` list defined above
			actions: getActions(singletonTypes),
		},
	});
}

export function getConfigWithNetlify(projectId:string, title:string, structure:StructureResolver, schemaTypes:any, singletonTypes:Set<string>, sites:SiteWidgetOption[]) {
	return defineConfig({
		name: 'default',
		title,

		projectId,
		dataset: 'production',

		scheduledPublishing: {
			enabled: false
		},

		plugins: [
			structureTool({
				structure
			}),
			dashboardTool({
      			widgets: [
      			  netlifyWidget({
      			      title: 'Deploy Site',
      			      sites
      			  })
      			]
    		})
		],

		schema: {
			types: schemaTypes,
			// Filter out singleton types from the global “New document” menu options
			templates: (templates) =>
				templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
		},

		document: {
			// For singleton types, filter out actions that are not explicitly included
			// in the `singletonActions` list defined above
			actions: getActions(singletonTypes),
		},
	});
}
