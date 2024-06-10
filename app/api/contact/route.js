import sendMail from "@/lib/sendMail";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, firstname, lastname, subject, phone, message } =
      await request.json();
    const send = await sendMail({
      email: email,
      firstName: firstname,
      lastName: lastname,
      subject: subject,
      phone: phone,
      message: message,
    });
    return NextResponse.json(
      { message: "Mail sent " },
      {
        status: 200,
        statusText: "Email sent successfully",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed sending email",
        error,
      },
      { status: 500 }
    );
  }
}

export const GET = async (request) => {
  return NextResponse.json({ id: 1, name: "issam" });
};
