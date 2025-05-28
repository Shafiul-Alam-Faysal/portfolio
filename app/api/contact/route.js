export async function POST(req) {
	const body = await req.formData();

	const name = body.get("name");
	const email = body.get("email");
	const message = body.get("message");

	const params = new URLSearchParams();
	params.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
	params.append("name", name);
	params.append("email", email);
	params.append("message", message);

	try {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: params.toString(),
		});

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "Form submission failed.",
				error: error.message,
			}),
			{ status: 500 }
		);
	}
}
