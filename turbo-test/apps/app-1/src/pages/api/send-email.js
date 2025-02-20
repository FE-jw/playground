import {sendEmail} from '@/lib/mailer';

export default async function handler(req, res) {
  const {mail, subject, text} = req.body;

  try {
    await sendEmail(mail, subject, text);
    res.status(200).json({message: 'Email sent successfully!'});
  } catch (error) {
    res.status(500).json({message: 'Error sending email', error: error});
  }
  // if (req.method === 'POST') {
  // }
}
