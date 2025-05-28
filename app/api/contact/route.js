import axios from "axios";

export async function POST(req) {
	try {
		const formData = await req.formData();
		formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);

		// Convert formData (which is ReadableStream) to an object for axios
		const data = {};
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}

		const response = await axios.post("https://api.web3forms.com/submit", data);

		return new Response(JSON.stringify(response.data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, message: error.message }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
