import classes from "./ContactmeForm.module.css";
import emailjs from "emailjs-com";

function ContactmeForm() {
  function Emailsubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xtgzfki",
      "template_9ll93ma",
      e.target,
      "user_kh1diuAotFnI96MCgonLa"
    );
    e.target.reset();
    alert("Thank you for your message!");
  }

  return (
    <section>
      <header className={classes.title}>
        <span>Contact me</span>
      </header>
      <form className={classes.form} onSubmit={Emailsubmit}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" required id="name" name="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" required id="email" name="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="subject">Subject</label>
          <input type="text" required id="subject" name="subject" />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea id="message" required row="5" name="message"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactmeForm;
