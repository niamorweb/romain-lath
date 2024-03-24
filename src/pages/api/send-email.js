import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, content } = req.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "romain2ndcmpt@gmail.com",
        pass: "ssip zwim qtzm vzdy",
      },
      secure: true,
    });

    try {
      // Envoyer l'e-mail
      await transporter.sendMail({
        to: "niamor.lth@gmail.com",
        text: content,
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
