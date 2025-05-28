import axios from "axios";

export async function POST(req) {
	try {
		const formData = await req.formData();

		// Convert formData to a plain object
		const data = {};
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}

		// Add your Web3Forms access key from environment variables
		data.access_key = process.env.WEB3FORMS_ACCESS_KEY;

		// Send the form data to Web3Forms API
		const response = await axios.post(
			"https://api.web3forms.com/submit",
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		// Return the response from Web3Forms
		return new Response(JSON.stringify(response.data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error in contact API:", error);

		return new Response(
			JSON.stringify({
				success: false,
				message: error.message || "Internal Server Error",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
