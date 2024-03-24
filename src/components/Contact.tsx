import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, content }),
    });
    if (response.ok) {
      setMessage("Message envoyé");
      setLoading(false);
    } else {
      setMessage("Erreur lors de l'envoi");
      setLoading(false);
    }
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <div
      id="contact"
      className="px-6 py-14 flex flex-col gap-10 lg:gap-0 lg:flex-row items-start"
    >
      <h1 className="text-4xl lg:text-6xl font-black w-full lg:w-1/2">
        Contactez moi
      </h1>
      <form
        className="w-full lg:w-1/2 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col gap-2">
          <p>E-mail</p>
          <input
            className="outline outline-[1px] outline-black px-3 py-2 w-full"
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>Message</p>
          <textarea
            className="outline outline-[1px] w-full outline-black px-3 py-2 h-[140px]"
            placeholder="Contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          disabled={loading}
          className="outline outline-[1px] outline-black px-8 py-2 font-medium self-start"
          type="submit"
        >
          Envoyer
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
