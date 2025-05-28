import axios from "axios";

export async function POST(req) {
	try {
		const formData = await req.formData();

		// Convert to URLSearchParams
		const data = new URLSearchParams();
		data.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
		for (const [key, value] of formData.entries()) {
			data.append(key, value);
		}

		const response = await axios.post(
			"https://api.web3forms.com/submit",
			data.toString(),
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/json", // ✅ Important: Request JSON response
				},
			}
		);

		return new Response(JSON.stringify(response.data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("API error:", error?.response?.data || error.message);

		return new Response(
			JSON.stringify({
				success: false,
				message: "Form submission failed.",
				error: error?.response?.data || error.message,
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
