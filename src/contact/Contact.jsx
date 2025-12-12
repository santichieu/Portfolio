import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTranslate } from "../hooks/useTranslate";

const Contact = () => {
  
  const t = useTranslate();

  emailjs.init("ZwxD5CnHQjr33aUV4");

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send("service_83xub7m", "template_gtr4e3m", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "santi.chieu@gmail.com",
      })
      .then(() => {
        setStatus("success");
        setFormData({ name: "", subject: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error enviando email:", error);
        setStatus("idle");
      });
  };

  return (
    <section
      id="contact"
      className="contactsection"
    >
      <div className="contactwrapper">
        <div className="contact-header">
          <h2 className="contacttitle">
            <span className="titleaccent">
              {t("Contactme")}
            </span>
          </h2>
          <div className="underline"></div>
          <p className="contactsubtitle">{t("contactdescription")}</p>
        </div>

        <div className="contactlayout">
          <div className="formcontainer">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="inputgroup">
                <label className="infosectiontitle" htmlFor="name">{t("Name")}:</label>
                <div className="inputwrapper">
                  <span className="inputicon">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("Name")}
                    className="form-input"
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="inputgroup">
                <label className="infosectiontitle" htmlFor="subject">{t("Subject")}:</label>
                <div className="inputwrapper">
                  <span className="inputicon">
                    <i class="bi bi-chat-left-text"></i>
                  </span>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("Subject")}
                    className="forminput"
                    required
                  />
                  <div className="inputhighlight"></div>
                </div>
              </div>

              <div className="inputgroup">
                <label className="infosectiontitle" htmlFor="email">{t("Email")}:</label>
                <div className="inputwrapper">
                  <span className="inputicon">
                    <i class="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("Your Email")}
                    className="forminput"
                    required
                  />
                  <div className="inputhighlight"></div>
                </div>
              </div>

              <div className="inputgroup">
                <label className="infosectiontitle" htmlFor="message">{t("Your Message")}:</label>
                <div className="textareawrapper">
                  <span className="textareaicon">
                    <i class="bi bi-text-left"></i>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("Your Message")}
                    className="formtextarea"
                    rows="5"
                    required
                  />
                  <div className="inputhighlight"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${status}`}
                disabled={status === "sending"}
              >
                <span className="btn-text">
                  {status === "sending" ? (
                    <>
                      <span className="spinner"></span>
                     {t("Sending")}
                    </>
                  ) : (
                    <>
                      <span className="sendicon"></span>
                      {t("Send")}
                    </>
                  )}
                </span>
              </button>

              {status === "success" && (
                <div className="successmessage">
                  <span className="successicon"></span>
                  <p>{t("messagesent")}</p>
                </div>
              )}
            </form>
          </div>

          <aside className="infocard" aria-label={t("ContactInfo")}>
            <h3 className="infotitle">{t("ContactInfo")}</h3>
            <p className="infodescription">{t("reachMe")}</p>

            <div className="infosection">
              <h4 className="infosectiontitle">{t("Email")}:</h4>
              <div className="infoitem">
                <i className="bi bi-envelope-fill infoiconbi"></i>
                <span className="infotext">santi.chieu@gmail.com</span>
              </div>
            </div>

            <div className="infosection">
              <h4 className="infotitle">{t("Location")}:</h4>
              <div className="infoitem">
                <i className="bi bi-globe-americas infoiconbi"></i>
                <span className="infotext">Rosario, Argentina</span>
              </div>
            </div>

            <div className="infosection">
              <h4 className="infotitle">{t("socialmedia")}:</h4>
              <div className="infoitem">
                <a
                  href="https://github.com/santichieu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialicon"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-chieu-171569187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialicon"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <hr className="Contact"></hr>
    </section>
  );
}
export default Contact;
