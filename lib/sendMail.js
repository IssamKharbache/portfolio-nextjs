import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAILPASS,
  },
});
const sendMail = async ({
  subject,
  email,
  firstName,
  lastName,
  phone,
  message,
}) => {
  await transport.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: "issamkharbache2@gmail.com",
    subject: "Get into touch",
    html: `<h1>Let's get in touch <h1> 
           <p>firstname:${firstName}</p>
           <p>lastName:${lastName}</p>
           <p>email:${email}</p>
           <p>phone:${phone}</p>
           <p>message:${message}</p>
          
    `,
  });
};

export default sendMail;
