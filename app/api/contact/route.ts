import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO = "anna.lena.wittich@gmail.com";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Not configured" }, { status: 503 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, affiliation, inquiry } = body as Record<string, string>;

    if (!name || !email || !inquiry) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const from = process.env.RESEND_FROM ?? "Anna Wittich Website <onboarding@resend.dev>";
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
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
