import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle FormData manually
  },
};

export async function POST(request: Request) {
  try {
    const formdata = await request.formData(); // Extract FormData from the request

    const recaptchaToken = request.headers.get("recaptcha-token");
    const formId = request.headers.get("form-id");

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // If reCAPTCHA is verified, process the form submission
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${formId}/submissions`,
      {
        method: "POST",
        body: formdata,
      }
    );

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Unexpected response format", responseText: text },
        { status: 500 }
      );
    }

    const result = await response.json();

    if (result.is_valid) {
      return NextResponse.json(result, { status: 200 });
    }
    return NextResponse.json(result, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: "Form submission failed", details: error.message },
      { status: 500 }
    );
  }
}
