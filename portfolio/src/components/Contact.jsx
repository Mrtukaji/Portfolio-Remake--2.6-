import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_ao7dczj", "template_m365ka2", formRef.current, "MlObJsOy5D0ctktoZ")
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-base/60 border border-violet/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/40 transition-all";

  return (
    <section id="contact" className="section-shell">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Get In Touch</h2>
        <p className="text-gray-400">Have a project in mind or just want to say hi? Drop a message.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto glass-card p-8 space-y-4">
        <input type="text" name="from_name" placeholder="Your Name" required className={inputClass} />
        <input type="email" name="from_email" placeholder="Your Email" required className={inputClass} />
        <textarea name="message" rows="5" placeholder="Your Message" required className={`${inputClass} resize-none`} />
        
        <button type="submit" disabled={status === "sending"} className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-gradient-135 font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "sending" ? "Sending..." : <><FiSend /> Send Message</>}
        </button>

        {status === "success" && <p className="flex items-center justify-center gap-2 text-green-400 text-sm"><FiCheckCircle /> Message sent successfully!</p>}
        {status === "error" && <p className="flex items-center justify-center gap-2 text-red-400 text-sm"><FiAlertCircle /> Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}