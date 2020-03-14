const fetch = require("node-fetch");

module.exports = async(req, res) => {
	let response = await fetch("https://worldcubeassociation.org/api/v0/competitions?country_iso2=IN");
	if (response.ok) {
		let json = await response.json();
		res.send({
			competitions: json,
			date: new Date()
		});
	} else {
		res.status(response.status).send();
	}
}