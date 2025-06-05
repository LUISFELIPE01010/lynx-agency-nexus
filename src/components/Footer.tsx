
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-lynx-gray/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c49b6884-7702-4b51-bbd3-43e415faffff.png" 
            alt="Lynx Agency" 
            className="w-8 h-8 mr-3 opacity-80"
          />
          <span className="font-space font-semibold text-white">LYNX</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com/lynx.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lynx-gray hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            📷
          </a>
          <a 
            href="https://wa.me/17329276563"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lynx-gray hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            💬
          </a>
        </div>
      </div>
      
      <div className="text-center mt-8 pt-8 border-t border-lynx-gray/10">
        <p className="text-lynx-gray text-sm font-inter">
          © 2024 Lynx Agency. Redefining brand excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
