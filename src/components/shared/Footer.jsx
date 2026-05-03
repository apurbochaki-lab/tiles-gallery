import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-4 p-15 bg-[#deedfc]">

            {/* Tiles Categories */}
            <nav className="flex flex-col items-center md:items-start gap-2">
                <h6 className="footer-title text-lg">Tiles Categories</h6>

                <Link href="#">Floor Tiles</Link>
                <Link href="#">Wall Tiles</Link>
                <Link href="#">Bathroom Tiles</Link>
                <Link href="#">Kitchen Tiles</Link>
                <Link href="#">Outdoor Tiles</Link>
            </nav>

            {/* Company */}
            <nav className="flex flex-col items-center md:items-start gap-2">
                <h6 className="footer-title text-lg mt-5 md:mt-0">Company</h6>

                <Link href="#">About Us</Link>
                <Link href="#">Our Showroom</Link>
                <Link href="#">Contact Us</Link>
                <Link href="#">Careers</Link>
            </nav>

            {/* Support */}
            <nav className="flex flex-col items-center md:items-start gap-2 text-xl">
                <h6 className="footer-title text-lg mt-5 md:mt-0">Support</h6>

                <Link href="#">Order Tracking</Link>
                <Link href="#">Shipping & Delivery</Link>
                <Link href="#">Return Policy</Link>
                <Link href="#">FAQs</Link>
            </nav>

            {/* Social (unchanged) */}
            <nav className="flex flex-col items-center md:items-start gap-4">
                <h6 className="footer-title text-lg">Follow Us</h6>
                <div className="grid grid-flow-col gap-4 justify-center md:justify-start">

                    {/* Facebook */}
                    <Link href={"https://www.facebook.com"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </Link>

                    {/* YouTube */}
                    <Link href={"https://www.youtube.com"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897-.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link href={"https://www.instagram.com"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M7 2c-2.761 0-5 2.239-5 5v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5v-10c0-2.761-2.239-5-5-5h-10zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"></path>
                        </svg>
                    </Link>

                </div>
            </nav>

        </footer>
    );
};

export default Footer;