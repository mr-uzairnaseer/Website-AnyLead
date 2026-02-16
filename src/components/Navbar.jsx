import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileDropdown = (e, menuName) => {
        e.preventDefault();
        setActiveMobileDropdown(activeMobileDropdown === menuName ? null : menuName);
    };

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
                setActiveMobileDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-white py-5 px-5 shadow-sm sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-[15px] flex justify-between items-center">
                <div className="flex-1 pt-2">
                    <a href="./" aria-label="AnyLead Home">
                        <img src="/assets/logo.svg" className="h-10 w-auto object-contain" alt="AnyLead Logo" />
                    </a>
                </div>

                {/* Desktop Navigation (Centered) */}
                <div className="hidden md:flex flex-1 justify-center items-center">
                    <ul className="flex items-center">
                        {/* Platform Mega Menu */}
                        <li className="relative dropdown group static">
                            <a href="#" aria-haspopup="true" aria-expanded="false" className="flex items-center cursor-pointer px-5 py-2.5 font-semibold transition-colors duration-300 text-gray-700 hover:text-primary dropdown-toggle">
                                Platform
                                <i className="fas fa-chevron-down transition-transform duration-300 text-xs ml-1 group-hover:rotate-180" aria-hidden="true"></i>
                            </a>
                            {/* Mega Menu Container */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2.5 bg-white w-[1000px] shadow-2xl rounded-2xl p-8 opacity-0 invisible transition-all duration-300 ease-out z-[1000] border border-gray-100 mt-2.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 dropdown-menu cursor-default grid grid-cols-3 gap-8 text-left" aria-label="Platform Mega Menu">

                                {/* Column 1: Platform Overview */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Platform Overview</h3>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-layer-group text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Explore Our Platform</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">High-performing teams are built here</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-briefcase text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Habits</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Make high performance a habit</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-chart-bar text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Analytics</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Turn people data into action</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-map-signs text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Product Roadmap</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Discover new AnyLead products</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Column 2: Products */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Products</h3>

                                    {/* Performance Item with Sublist */}
                                    <div>
                                        <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                                <i className="fas fa-sync text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Performance</h4>
                                                <p className="text-sm text-gray-500 mt-0.5">Build a high-performing team</p>
                                            </div>
                                        </a>
                                        {/* Sublist */}
                                        <ul className="pl-[72px] space-y-2 border-l-2 border-gray-100 ml-5">
                                            {['Performance Reviews', 'Talent Reviews', 'PIPs', 'Succession Planning', '1:1s', 'Updates', 'Feedback'].map((item) => (
                                                <li key={item}>
                                                    <a href="#" className="text-sm text-gray-600 hover:text-primary font-medium block pl-4 -ml-[2px] border-l-2 border-transparent hover:border-primary transition-colors">
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <i className="far fa-heart text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Engagement</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Survey smarter with AI insights</p>
                                        </div>
                                    </a>

                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-bullseye text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Goals & OKRs</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Set goals, track progress</p>
                                        </div>
                                    </a>

                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-seedling text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Grow</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Make career progression clear</p>
                                        </div>
                                    </a>

                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-coins text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">Compensation</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Strategic pay that aligns to your budget</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Column 3: AnyLead AI */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">AnyLead AI</h3>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-magic text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors">AI Overview</h4>
                                            <p className="text-sm text-gray-500 mt-0.5">From reactive to proactive Sales</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex gap-4 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-robot text-lg"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition-colors flex items-center gap-2">
                                                AI Agent
                                                <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-0.5">Your always-on Sales partner</p>
                                        </div>
                                    </a>

                                    {/* Promo Card */}
                                    <div className="mt-4 bg-green-50 rounded-2xl p-6 relative overflow-hidden group/promo hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="relative z-10">
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">Take a tour of AnyLead</h4>
                                            <p className="text-sm text-gray-600 mb-4">Check out our free interactive tours</p>
                                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center gap-3 mt-4">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                    <i className="fas fa-user text-xs"></i>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-400">Welcome</p>
                                                    <p className="text-sm font-semibold text-gray-800">Hi, There!</p>
                                                </div>
                                                <i className="fas fa-hand-pointer text-gray-800 text-xl ml-auto transform translate-y-2 group-hover/promo:scale-110 transition-transform"></i>
                                            </div>
                                        </div>
                                        {/* Decorative blur */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li className="relative">
                            <a href="#pricing" className="px-5 py-2.5 block font-semibold transition-colors duration-300 text-gray-700 hover:text-primary">WhyUs</a>
                        </li>
                        <li className="relative">
                            <a href="industries.html" className="px-5 py-2.5 block font-semibold transition-colors duration-300 text-gray-700 hover:text-primary">Customers</a>
                        </li>
                        <li className="relative">
                            <a href="#" className="px-5 py-2.5 block font-semibold transition-colors duration-300 text-gray-700 hover:text-primary">Resources</a>
                        </li>
                        <li className="relative">
                            <a href="industries.html" className="px-5 py-2.5 block font-semibold transition-colors duration-300 text-gray-700 hover:text-primary">Customers</a>
                        </li>
                    </ul>
                </div>

                {/* Desktop Actions (Right) */}
                <div className="hidden md:flex flex-1 justify-end items-center gap-3">
                    <a className="inline-block py-3 px-5 bg-light text-gray-700 font-semibold border-none rounded-xl cursor-pointer text-center transition-opacity duration-500 hover:opacity-80" href="signup.html">Log in</a>
                    <a className="inline-block py-3 px-5 bg-primary text-white font-semibold border-none rounded-xl cursor-pointer text-center transition-opacity duration-500 hover:opacity-80" href="signup.html">Request a demo</a>
                </div>

                {/* Hamburger Button */}
                <button
                    ref={hamburgerRef}
                    className="md:hidden bg-transparent border-none cursor-pointer p-2.5 z-[1000]"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <div className="w-[30px] h-[3px] bg-gray-700 mx-auto mb-[6px] last:mb-0"></div>
                    <div className="w-[30px] h-[3px] bg-gray-700 mx-auto mb-[6px] last:mb-0"></div>
                    <div className="w-[30px] h-[3px] bg-gray-700 mx-auto mb-[6px] last:mb-0"></div>
                </button>

                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef}
                    className={`fixed top-0 w-[280px] h-full z-40 bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto md:hidden ${isMobileMenuOpen ? 'right-0' : 'right-[-280px]'}`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <ul className="mt-24 px-5">
                        <li className={`relative dropdown border-b border-gray-100 mobile-dropdown ${activeMobileDropdown === 'platform' ? 'active' : ''}`}>
                            <a
                                href="#"
                                aria-haspopup="true"
                                aria-expanded={activeMobileDropdown === 'platform'}
                                className="flex items-center justify-between w-full text-base transition duration-300 py-3.75 px-2.5 hover:text-primary dropdown-toggle"
                                onClick={(e) => toggleMobileDropdown(e, 'platform')}
                            >
                                Platform
                                <i className="fas fa-chevron-down transition-transform duration-300 text-xs" aria-hidden="true"></i>
                            </a>
                            <ul className="mobile-dropdown-menu bg-primary/5 mt-1.25" aria-label="Platform submenu">
                                <li className="border-b border-transparent last:border-none">
                                    <a href="features.html#smart-calling" className="relative text-sm py-2.5 pl-8 pr-5 block transition duration-300 hover:bg-primary/10 hover:pl-10">
                                        <i className="fas fa-phone-alt mr-2.5 inline-block w-4" aria-hidden="true"></i> Smart Telecalling
                                    </a>
                                </li>
                                <li className="border-b border-transparent last:border-none">
                                    <a href="features.html#whatsapp" className="relative text-sm py-2.5 pl-8 pr-5 block transition duration-300 hover:bg-primary/10 hover:pl-10">
                                        <i className="fab fa-whatsapp mr-2.5 inline-block w-4" aria-hidden="true"></i> WhatsApp Business
                                    </a>
                                </li>
                                <li className="border-b border-transparent last:border-none">
                                    <a href="features.html#lead-management" className="relative text-sm py-2.5 pl-8 pr-5 block transition duration-300 hover:bg-primary/10 hover:pl-10">
                                        <i className="fas fa-users-cog mr-2.5 inline-block w-4" aria-hidden="true"></i> Lead Management
                                    </a>
                                </li>
                                <li>
                                    <a href="features.html#automation" className="relative text-sm py-2.5 pl-8 pr-5 block transition duration-300 hover:bg-primary/10 hover:pl-10">
                                        <i className="fas fa-project-diagram mr-2.5 inline-block w-4" aria-hidden="true"></i> Workflow Automation
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="my-1.25 border-b border-gray-100 last:border-none">
                            <a href="#pricing" className="text-base transition duration-300 py-3.75 px-2.5 block hover:text-primary">Pricing</a>
                        </li>
                        <li className="my-1.25 border-b border-gray-100 last:border-none">
                            <a href="industries.html" className="text-base transition duration-300 py-3.75 px-2.5 block hover:text-primary">Industries</a>
                        </li>
                        <li className="my-1.25 border-b border-gray-100 last:border-none">
                            <a href="#" className="text-base transition duration-300 py-3.75 px-2.5 block hover:text-primary">Resources</a>
                        </li>
                        <li className="my-1.25 border-b border-gray-100 last:border-none">
                            <a className="inline-block py-3 px-5 bg-light text-gray-700 font-semibold border-none rounded-xl cursor-pointer text-center transition-opacity duration-500 hover:opacity-80 w-full" href="login.html">
                                <i className="fas fa-user mr-2.5" aria-hidden="true"></i> Log In
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
