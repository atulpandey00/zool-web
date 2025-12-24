const CTASection = () => {
  return (
    <section className="relative w-full">
      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[430px] h-[505px] mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
          Let's Build the Future, Together.
        </h2>
        
        <div className="mb-8">
          <p className="text-gray-600 text-base mb-2">
            Ready to bring your digital vision to life?
          </p>
          <p className="text-gray-600 text-base">
            Let's collaborate.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full transition-colors duration-200 text-sm font-medium">
            Start a Project
          </button>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium">
            Hire Developers
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div 
        className="hidden md:block relative"
        style={{
          width: '100%',
          maxWidth: '1920px',
          height: '398px',
          paddingTop: '80px',
          paddingRight: '280px',
          paddingBottom: '80px',
          paddingLeft: '280px',
          margin: '0 auto'
        }}
      >      
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Let's Build the Future, Together.
          </h2>
          
          <div className="mb-8">
            <p className="text-gray-600 text-lg mb-2">
              Ready to bring your digital vision to life?
            </p>
            <p className="text-gray-600 text-lg">
              Let's collaborate.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full transition-colors duration-200">
              Start a Project
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors duration-200 flex items-center gap-2">
              Hire Developers
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;