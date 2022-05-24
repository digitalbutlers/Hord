(async function tokenInfoFilling() {
	let circulating = null;
	let total = null;

	async function getNumber(url) {
		// eslint-disable-next-line no-console
		console.log(url);
		const response = await fetch(url);
		if (response.ok) {
			return response.json();
		}
		// eslint-disable-next-line no-console
		console.error(`hord api error:${response.status}`);
		return response.json();
	}

	getNumber('https://api.hord.app/supply?decimals=true')
		.then((result) => {
			circulating = result;
			return getNumber('https://api.hord.app/supply?total=true&decimals=true');
		})
		.then(async (result) => {
			total = result;

			const ethplorerResponse = await fetch(
				'https://api.ethplorer.io/getTokenInfo/0x43A96962254855F16b925556f9e97BE436A43448?apiKey=EK-9hXVg-X8ZbGuu-JubYu',
			);
			if (ethplorerResponse.ok) {
				const json = await ethplorerResponse.json();

				document.querySelector('[hord-api-filling="circulating"]').innerHTML = new Intl.NumberFormat().format(Math.round(circulating));
				document.querySelector('[hord-api-filling="total"]').innerHTML = new Intl.NumberFormat().format(total);
				document.querySelector('[hord-api-filling="percent"]').innerHTML = Math.round(((circulating * 100) / total) * 10) / 10;
				document.querySelector('[hord-api-filling="market-cap"]').innerHTML = new Intl.NumberFormat().format(
					Math.round(circulating * json.price.rate),
				);

				const attr = 'ethplorer-api-filling';
				const itemsToFill = document.querySelectorAll(`[${attr}]`);
				for (let i = 0; i < itemsToFill.length; i += 1) {
					const item = itemsToFill[i];
					if (item.getAttribute(attr) === 'price') {
						item.innerHTML = Math.round(json.price.rate * 1000) / 1000;
						// eslint-disable-next-line no-continue
						continue;
					} else {
						item.innerHTML = json[item.getAttribute(attr)];
					}
				}
			} else {
				// eslint-disable-next-line no-console
				console.error(`ethplorer api error:${ethplorerResponse.status}`);
			}
		});
}());
