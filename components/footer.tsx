export default function Footer() {
    return (
        <footer className="py-8 sm:py-12 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">ZOOL</h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-md">
                            Where creativity meets intelligent technology — and talent powers transformation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#services" className="hover:text-white transition">Services</a></li>
                            <li><a href="#works" className="hover:text-white transition">Our Works</a></li>
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>hello@zool.design</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; 2024 ZOOL. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}