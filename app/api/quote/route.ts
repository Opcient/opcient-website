export const runtime = "nodejs";

import { Resend } from "resend";

export async function GET() {
  return new Response("API OK", { status: 200 });
}

export async function POST(req: Request) {
  console.log("QUOTE API reached"); // keep this temporarily

  try {
    console.log("POST /api/quote hit");
    // ---- ENV GUARDS (prevents build-time failure) ----
    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
      });
    }

    if (!process.env.QUOTE_TO_EMAIL) {
      return new Response(JSON.stringify({ error: "Recipient email not configured" }), {
        status: 500,
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    // -------------------------------------------------

    const data = await req.json();

    const {
      businessName,
      contactName,
      email,
      phone,
      fromLocation,
      fromAccess,
      toLocation,
      toAccess,
      parkingAvailableOrigin,
      parkingAvailableDestination,
      items,
      duration,
      dates,
      twoPersonLift,
      fragileItems,
      includeSupervisor,
      notes,
    } = data;

    // ---- Minimal backend validation ----
    if (
      !businessName ||
      !contactName ||
      !email ||
      !fromLocation ||
      !toLocation ||
      !items ||
      !duration
    ) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    if (typeof email !== "string" || !email.includes("@") || email.length > 254) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), { status: 400 });
    }

    if (items.length > 5000 || notes?.length > 5000) {
      return new Response(JSON.stringify({ error: "Input too long" }), { status: 400 });
    }
    // ------------------------------------

    const html = `
      <h2>New Commercial Quote Request</h2>
      <hr />

      <h3>Client Details</h3>
      <p>
        <strong>Business:</strong> ${businessName}<br/>
        <strong>Contact:</strong> ${contactName}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone || "-"}
      </p>

      <hr />

      <h3>Move Overview</h3>
      <p>
        <strong>From:</strong> ${fromLocation}<br/>
        <strong>Access:</strong> ${fromAccess}<br/>
        <strong>Parking:</strong> ${parkingAvailableOrigin ? "Available" : "Not specified"}
      </p>

      <p>
        <strong>To:</strong> ${toLocation}<br/>
        <strong>Access:</strong> ${toAccess}<br/>
        <strong>Parking:</strong> ${parkingAvailableDestination ? "Available" : "Not specified"}
      </p>

      <hr />

      <h3>Scope & Timing</h3>
      <p>
        <strong>Estimated duration:</strong> ${duration}<br/>
        <strong>Preferred dates:</strong> ${dates || "-"}
      </p>

      <p>
        <strong>Items being moved:</strong><br/>
        ${items}
      </p>

      <hr />

      <h3>Operational Flags</h3>
      <ul>
        <li><strong>Two-person lift only:</strong> ${twoPersonLift ? "Yes" : "No"}</li>
        <li><strong>Fragile items:</strong> ${fragileItems ? "Yes" : "No"}</li>
        <li><strong>On-site supervisor requested:</strong> ${includeSupervisor ? "Yes" : "No"}</li>
      </ul>

      <hr />

      <h3>Additional Notes</h3>
      <p>${notes || "-"}</p>
    `;

    await resend.emails.send({
      from: "Sydney Movers <onboarding@resend.dev>",
      to: [process.env.QUOTE_TO_EMAIL],
      subject: `Quote request – ${businessName}`,
      replyTo: email,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
