import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure email transport
    // Using Gmail SMTP - you'll need to set up App Passwords in Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: `"Edinz Tech Website" <${process.env.EMAIL_USER}>`,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Enquiry from ${firstName} ${lastName}${company ? ` — ${company}` : ''}`,
      text: `New Enquiry — Edinz Tech\n\nName: ${firstName} ${lastName}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}${company ? `\nCompany: ${company}` : ''}${service ? `\nService: ${service}` : ''}\n\nMessage:\n${message}\n\n---\nSent from the contact form on edinztech.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B3A6B;">New Contact Form Submission</h2>
          <div style="background-color: #F8F9FC; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border-left: 3px solid #E87722;">${message}</p>
          </div>
          <p style="color: #6B7280; font-size: 12px; margin-top: 20px;">
            Sent from the contact form on edinztech.com
          </p>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: `"Edinz Tech" <${process.env.EMAIL_USER}>`,
      replyTo: `"Edinz Tech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Hi ${firstName}, we received your enquiry`,
      text: `Hi ${firstName},\n\nThank you for reaching out to Edinz Tech. We have received your message and will get back to you within 24 business hours.\n\nYour enquiry:\nService: ${service || 'Not specified'}\nMessage: ${message}\n\nBest regards,\nThe Edinz Tech Team\nwww.edinztech.com\n+91 44 6145 90000`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B3A6B;">Thank You for Reaching Out!</h2>
          <p>Hi ${firstName},</p>
          <p>We have received your message and appreciate you contacting us. Our team will review your request and get back to you as soon as possible — typically within 24 business hours.</p>
          <div style="background-color: #F8F9FC; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 3px solid #E87722;">
            <p><strong>Here's what you submitted:</strong></p>
            <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px;">
            In the meantime, feel free to explore <a href="https://edinztech.com" style="color: #E87722; text-decoration: none;">our services</a> or reach out to us directly at <a href="tel:+914461459000" style="color: #E87722; text-decoration: none;">+91 44 6145 90000</a>.
          </p>
          <p style="color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #E2E8F0; padding-top: 15px;">
            Best regards,<br/>
            The Edinz Tech Team<br/>
            <a href="https://www.edinztech.com" style="color: #E87722; text-decoration: none;">www.edinztech.com</a>
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
