export async function POST(req) {
	try {
		const formData = await req.formData();

		const body = new URLSearchParams();
		body.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
		for (const [key, value] of formData.entries()) {
			body.append(key, value);
		}

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
			},
			body: body.toString(),
		});

		const text = await res.text();

		// Log raw response text if JSON parsing fails
		let result;
		try {
			result = JSON.parse(text);
		} catch (e) {
			console.error("Failed to parse JSON response:", text);
			throw new Error("Invalid JSON response from Web3Forms API");
		}

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Form submission error:", error);

		return new Response(
			JSON.stringify({
				success: false,
				message: "Form submission failed.",
				error: error.message,
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
