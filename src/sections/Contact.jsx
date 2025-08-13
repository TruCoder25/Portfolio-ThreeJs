import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const getRows = () => {
  if (window.innerWidth >= 1024) return 3; // lg
  return 1;
};

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

   const [rows, setRows] = useState(getRows());


  const [form, setForm] = useState({ name: '', email: '', message: '' });

  


  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    const handleResize = () => setRows(getRows());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    //service_ayo8nfa
    //template_z6gfn0m

    try{
        await emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
        'service_ayo8nfa',
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
        'template_z6gfn0m',
        {
          from_name: form.name,
          to_name: 'Pratibha',
          from_email: form.email,
          to_email: 'Pratibhavishlavath2564@gmail.com',
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        '6xVIAMj1iBB9I_QDC',
      )
       setLoading(false);
          alert('Your Message Hash Been Sent')
    }   
    catch{
        setLoading(false);
        alert('Something Went Wrong')
    }
  }

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text md:mt-6 lg:mt-10">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={rows}
                className="field-input md:h-0"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
