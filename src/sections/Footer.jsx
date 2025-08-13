const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-40">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
    href="https://github.com/TruCoder25"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="/assets/github.svg"
      alt="github"
      className="w-1/2 h-1/2"
    />
  </a>
        </div>
        <div className="social-icon">
           <a
    href="https://x.com/Pratibha2564"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
  </a>
          
        </div>
        <div className="social-icon">
           <a
    href="https://www.linkedin.com/in/pratibha-vishlavath-0084a4310"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  > <img src="/assets/in.png" alt="Linkedin" className="w-1/2 h-1/2" /></a>
         
        </div>
      </div>

      <p className="text-white-500">© 2025 Vishlavath Pratibha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;