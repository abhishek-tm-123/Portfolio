import { error } from "console";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message || !subject) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "abhishektm444@gmail.com",
            subject: `Portfolio Contact: ${subject}`,
            replyTo: email,
            html: `
            <h2>New Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p>${message}</p>
            `
        });
        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log("error sending message", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );

    }
}
