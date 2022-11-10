const getPage = () => {

	const pages = [];

	for(let i = 0; i < 10; i++){
		const p = {
			title: `LifeCyle page ${i}`,
			slug: `lifecycle-page-slug-${i}`
		};
		pages.push(p)
	}

	return pages
}

module.exports = getPage();