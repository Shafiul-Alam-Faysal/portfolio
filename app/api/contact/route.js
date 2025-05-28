export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email, message } = body;

		const params = new URLSearchParams();
		params.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
		params.append("name", name);
		params.append("email", email);
		params.append("message", message);

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
		console.error("CONTACT API ERROR:", error); // ✅ See this in Vercel logs
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
