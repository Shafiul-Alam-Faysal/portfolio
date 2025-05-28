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
		// Parse formData from the incoming request
		const formData = await req.formData();

		// Log form data entries for debugging
		console.log("Received form data:");
		for (const [key, value] of formData.entries()) {
			console.log(key, ":", value);
		}

		// Build URLSearchParams with access_key and form fields
		const body = new URLSearchParams();
		body.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);

		for (const [key, value] of formData.entries()) {
			body.append(key, value);
		}

		// Call Web3Forms API
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
			},
			body: body.toString(),
		});

		// Log response status
		console.log("Web3Forms response status:", res.status);

		// If not OK, log error text
		if (!res.ok) {
			const errorText = await res.text();
			console.error("Web3Forms API error response:", errorText);
			return new Response(
				JSON.stringify({
					success: false,
					message: "Error from Web3Forms API",
					details: errorText,
				}),
				{ status: res.status, headers: { "Content-Type": "application/json" } }
			);
		}

		// Parse JSON result from Web3Forms
		const result = await res.json();

		// Return the result as JSON response to frontend
		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Form submission error:", error);
		return new Response(
			JSON.stringify({
				success: false,
				message: "Form submission failed due to server error.",
				error: error.message,
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
