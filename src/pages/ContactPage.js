import ContactmeForm from "../components/ContactmeForm";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage() {
  return (
    <section>
      <ContactmeForm />
      <div className="w-50 text-left mx-auto fa-2xl">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adam780930"
          role="button"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="btn-secondary mr-2"
            role="button"
          ></FontAwesomeIcon>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adam-yilin-tsai"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="btn-secondary"
          ></FontAwesomeIcon>
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
