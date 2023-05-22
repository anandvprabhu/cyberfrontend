import fetch from "node-fetch";

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/joeldenny/complaint_model",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "My name is joel denny. I have a dept with tisa sunny. She is threatening to kill me and illegally give case against."}).then((response) => {
	console.log(JSON.stringify(response));
});