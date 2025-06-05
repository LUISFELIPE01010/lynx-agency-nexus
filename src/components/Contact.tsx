
const Contact = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-8">
          Let's Talk
        </h2>
        <p className="text-xl text-lynx-gray mb-12 font-inter max-w-2xl mx-auto leading-relaxed">
          Ready to elevate your brand? Let's start a conversation about your vision and how we can bring it to life.
        </p>
        
        <a 
          href="https://wa.me/17329276563"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-space font-semibold hover:bg-lynx-gray transition-all duration-300 hover:scale-105"
        >
          <span>💬</span>
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default Contact;
