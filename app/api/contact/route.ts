import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// From address must be on a domain verified in your Resend account.
// During development you can use "onboarding@resend.dev" (Resend's shared sender).
// For production, set this to e.g. "website@annawittich.com" once the domain is verified.
const FROM = process.env.RESEND_FROM ?? "Anna Wittich Website <onboarding@resend.dev>";
const TO = "anna.lena.wittich@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, affiliation, inquiry } = body as Record<string, string>;

    if (!name || !email || !inquiry) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New inquiry from ${name}${affiliation ? ` — ${affiliation}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Affiliation: ${affiliation || "—"}`,
        "",
        "Inquiry:",
        inquiry,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
