/**
 * Plop JS
 * https://plopjs.com/documentation/
 */

/* Variables 
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
// global
let lib = `./src/lib`;
let routes = `./src/routes/(docs)/docs`;
let templates = `+templates`;
let index = `${lib}/index.js`;

// component
let componentTypes = ['Atom', 'Molecule', 'Organism', 'Page', 'Particle', 'Template'];
let componentExport = `${templates}/component/index.js.hbs`;
let componentBase = `${templates}/component/template`;
let componentFiles = `${templates}/component/template/**/*`;
let componentDestination = `${lib}/components/{{lowerCaseNoSpace component}}s/{{name}}`;

// store
let storeExport = `${templates}/store/index.js.hbs`;
let storeBase = `${templates}/store/template`;
let storeFiles = `${templates}/store/template/**/*`;
let storeDestination = `${lib}/stores`;

// action
let actionExport = `${templates}/action/index.js.hbs`;
let actionBase = `${templates}/action/template`;
let actionFiles = `${templates}/action/template/**/*`;
let actionDestination = `${lib}/actions`;

// story
let storyBase = `${templates}/story/`;
let storyFiles = `${templates}/story/**/*`;
let storyDestination = `${routes}/{{name}}`;

export default function (plop) {
	/* Component
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
	plop.setGenerator('component', {
		description: 'create new component',

		prompts: [
			{
				// Name
				type: 'input',
				name: 'name',
				message: "What's the name of your component?"
			},

			{
				// Type
				type: 'list',
				name: 'component',
				message: 'What type of component?',
				choices: componentTypes
			}
		],

		actions: function (data) {
			let actions = [];

			/* Component Type */
			switch (data.component) {
				/* 1. Atoms
				 *************************************************/
				case 'Atom':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {atoms} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* 2. Molecules
				 *************************************************/
				case 'Molecule':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {molecules} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* 3. Organisms
				 *************************************************/
				case 'Organism':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {organisms} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* 4. Pages
				 *************************************************/
				case 'Page':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {pages} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* 5. Particles
				 *************************************************/
				case 'Particle':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {particles} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* 6. Templates
				 *************************************************/
				case 'Template':
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* {templates} \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
					break;

				/* default
				 *************************************************/
				default:
					// create component
					actions.push({
						type: 'addMany',
						base: componentBase,
						templateFiles: componentFiles,
						destination: componentDestination
					});
					// export component
					actions.push({
						type: 'append',
						path: index,
						templateFile: componentExport,
						pattern: /\/\* components \*\//i
					});
					// create story
					actions.push({
						type: 'addMany',
						base: storyBase,
						templateFiles: storyFiles,
						destination: storyDestination
					});
			}

			return actions;
		}
	});

	/* Store
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
	plop.setGenerator('store', {
		description: 'create new store',

		prompts: [
			{
				// Name
				type: 'input',
				name: 'name',
				message: "What's the name of your store?"
			}
		],

		actions: [
			{
				// create store
				type: 'addMany',
				base: storeBase,
				templateFiles: storeFiles,
				destination: storeDestination
			},
			{
				// export store
				type: 'append',
				path: index,
				pattern: /\/\* {stores} \*\//i,
				templateFile: storeExport
			}
		]
	});

	/* Action
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
	plop.setGenerator('action', {
		description: 'create new action',

		prompts: [
			{
				// Name
				type: 'input',
				name: 'name',
				message: "What's the name of your action?"
			}
		],

		actions: [
			{
				// create action
				type: 'addMany',
				base: actionBase,
				templateFiles: actionFiles,
				destination: actionDestination
			},
			{
				// export action
				type: 'append',
				path: index,
				pattern: /\/\* {actions} \*\//i,
				templateFile: actionExport
			}
		]
	});

	/* Story
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
	plop.setGenerator('story', {
		description: 'create new story',

		prompts: [
			{
				// Story Name
				type: 'input',
				name: 'name',
				message: 'What is the name of your story?'
			},

			{
				// Component Type
				type: 'list',
				name: 'component',
				message: 'What type of component?',
				choices: componentTypes
			}
		],

		actions: [
			{
				// Create story
				type: 'addMany',
				base: storyBase,
				templateFiles: storyFiles,
				destination: storyDestination
			}
		]
	});

	/* Helpers
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
	plop.setHelper('lowerCaseNoSpace', function (str) {
		return str.toLowerCase().replace(/\s/g, '');
	});
}
