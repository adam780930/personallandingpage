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
      <form
        className="w-50 mx-auto mt-5 px-2 py-2 border border-dark rounded bg-light"
        onSubmit={Emailsubmit}
      >
        <header className="my-2 text-center">
          <span className="h1">Contact me</span>
        </header>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            required
            id="subject"
            name="subject"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            row="5"
            name="message"
            className="form-control"
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactmeForm;
