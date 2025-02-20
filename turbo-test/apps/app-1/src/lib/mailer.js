import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (mail, subject, text) => {
  await transporter.sendMail({
    from: mail,
    to: process.env.EMAIL,
    subject: subject,
    text: text,
  });
};
