const getPage = () => {

	const pages = [];

	for(let i = 0; i < 10; i++){
		const p = {
			title: `Nomad page ${i}`,
			slug: `nomad-page-slug-${i}`
		};
		pages.push(p)
	}

	return pages
}

module.exports = getPage();