// export async function POST(req) {
// 	try {
// 		const formData = await req.formData();

// 		// Convert to URL-encoded string
// 		const body = new URLSearchParams();
// 		body.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
// 		for (const [key, value] of formData.entries()) {
// 			body.append(key, value);
// 		}

// 		const res = await fetch("https://api.web3forms.com/submit", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 				Accept: "application/json", // This is crucial
// 			},
// 			body: body.toString(),
// 		});

// 		const result = await res.json(); // 🔥 This will now be JSON, not HTML

// 		return new Response(JSON.stringify(result), {
// 			status: 200,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	} catch (error) {
// 		console.error("Form submit error:", error);

// 		return new Response(
// 			JSON.stringify({
// 				success: false,
// 				message: "Form submission failed.",
// 				error: error.message,
// 			}),
// 			{ status: 500, headers: { "Content-Type": "application/json" } }
// 		);
// 	}
// }

// app/api/contact/route.js (or /api/contact/route.js)

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

		if (!res.ok) {
			const text = await res.text(); // read the raw HTML or error message
			console.error("Web3Forms API error (non-200):", text);
			return new Response(
				JSON.stringify({
					success: false,
					message: "Web3Forms API returned an error",
					details: text,
				}),
				{ status: res.status, headers: { "Content-Type": "application/json" } }
			);
		}

		const result = await res.json();

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Form submit error:", error);
		return new Response(
			JSON.stringify({
				success: false,
				message: "Form submission failed",
				error: error.message,
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
