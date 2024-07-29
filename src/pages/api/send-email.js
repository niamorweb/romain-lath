import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, content } = req.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_SENDER_ADRESS,
        pass: process.env.MAIL_SENDER_PASS_CODE,
      },
      secure: true,
    });
    try {
      // Envoyer l'e-mail
      await transporter.sendMail({
        to: process.env.MAIL_RECEIVER_ADRESS,
        text: `
        From : ${email}
        Content : ${content}
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res
        .status(500)
        .json({ success: false, error: "Erreur lors de l'envoi de l'email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Méthode non autorisée" });
  }
}
