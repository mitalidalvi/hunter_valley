export default function Navbar() {
    return (
        <header className="h-[83px] bg-white border-b">
            <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">

            {/* Logo */}
            <div className="font-bold text-xl">
                SSA HUNTER VALLEY
            </div>

            {/* Menu */}
            <nav>
                <ul className="flex items-center gap-8 text-[16px] font-medium">
                    <li>About Us</li>
                    <li>Matches</li>
                    <li>Programs</li>
                    <li>Coaches</li>
                    <li>Amenities</li>
                    <li>Events</li>
                    <li>News</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            </div>
        </header>
    );
}