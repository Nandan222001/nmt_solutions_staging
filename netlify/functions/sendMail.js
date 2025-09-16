import nodemailer from "nodemailer";

console.log(nodemailer);
export async function handler(event, context) {
  const data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: "gmail", // or Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: "your@email.com",
    subject: "New Project Request",
    text: `
      Name: ${data.firstName} ${data.lastName}
      Company: ${data.company}
      Phone: ${data.phone}
      Country: ${data.country}
      Role: ${data.role}
      Message: ${data.message}
    `,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully!" }),
  };
}
