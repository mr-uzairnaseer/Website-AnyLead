const Hero = () => {
    const handleBookDemo = (e) => {
        e.preventDefault();
        if (typeof window.openBookDemoModal === 'function') {
            window.openBookDemoModal();
        } else {
            console.log('Book a Demo modal trigger: functionality pending implementation.');
            // Optional: alert similar to original script logic if needed, or just log
        }
    };

    return (
        <section className="hero mt-10 mb-12">
            <div className="max-w-[1400px] mx-auto px-[15px] bg-no-repeat bg-bottom bg-[length:330px_380px] bg-[url('/assets/Image-mobile.png')] h-[770px] md:bg-[url('/assets/Images.png')] md:bg-contain md:bg-[position:center_bottom] md:h-[530px]">
                <div className="hero-content relative z-10 w-full lg:w-[70%] text-center lg:text-left">
                    <h1 className="text-[3rem] font-semibold leading-tight text-dark mt-10 mb-5 lg:mt-0">
                        Lead-Powered Tele-Calling CRM
                    </h1>
                    <p className="hero-text text-gray-700 mb-5 w-full lg:w-[70%] text-center lg:text-left">
                        Empowering Pakistani businesses to streamline their entire sales operations with smart calling, WhatsApp integration, and intelligent automation - from lead capture to closure, all in one unified platform
                    </p>
                    <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                        <a
                            className="inline-block py-3 px-8 bg-primary text-white font-semibold border-none rounded-xl cursor-pointer text-center transition-opacity duration-500 hover:opacity-80"
                            href="#pricing"
                        >
                            Get Started
                        </a>
                        <a
                            className="inline-block py-3 px-8 bg-light text-gray-700 font-semibold border-none rounded-xl cursor-pointer text-center transition-opacity duration-500 hover:opacity-80 book-demo-btn"
                            href="#"
                            onClick={handleBookDemo}
                        >
                            <i className="fas fa-laptop mr-2.5" aria-hidden="true"></i> Book a Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
