import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { NEXUDUS_MEMBER_LOGIN_URL } from "../config/nexudus";

// Top-level pages only. The old scroll-to-section links (About, The
// Problem, Community, Stories) were removed per team feedback — the home
// page still has those sections, people just scroll to read them.
const navItems = [
  { label: "Home", href: "/" },
  { label: "Ethos", href: "/ethos" },
  { label: "Events", href: "/events" },
  { label: "Bookings", href: "/bookings" },
  // Hidden for now — restore these lines to bring them back.
  // { label: "Articles", href: "/articles" },
  // { label: "Contact", href: "/" },
];

const SiteNav = ({ fixed = true }: { fixed?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // The Contact modal is owned here so the nav's Contact link opens it on
  // every page, not just the home page.
  const [isContactOpen, setIsContactOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
  ) => {
    if (label === "Contact") {
      e.preventDefault();
      setIsContactOpen(true);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav
      className={`${
        fixed ? "fixed" : "relative"
      } w-full z-50 transition-all duration-300 bg-white/95 shadow-md py-0.5`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo: smooth-scroll when already home, otherwise navigate home */}
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="w-[200px] h-24 flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/Assets/LBC Primary.svg"
            className="object-contain h-full"
            alt="LBC Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleItemClick(e, item.label)}
              className="hover:text-[#F5A623] transition-colors"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
          {/* Link-out to the Nexudus members portal. Same tab (not a new
              one) so the portal's own Back button, which uses browser
              history, can return here instead of landing on a blank tab. */}
          <a
            href={NEXUDUS_MEMBER_LOGIN_URL}
            className="hover:text-[#F5A623] transition-colors"
          >
            MEMBER LOGIN
          </a>
          <Link
            to="/join"
            className="px-5 py-2 bg-[#121212] text-white font-bold tracking-wide hover:bg-[#F5A623] transition-colors duration-300"
          >
            JOIN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F4F1EA] border-b border-gray-200 py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleItemClick(e, item.label)}
                className="font-bold text-lg"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={NEXUDUS_MEMBER_LOGIN_URL}
              onClick={() => setIsMenuOpen(false)}
              className="font-bold text-lg"
            >
              Member Login
            </a>
            <Link
              to="/join"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-[#121212] text-white font-bold text-lg hover:bg-[#F5A623] transition-colors duration-300"
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
    <ContactModal
      isOpen={isContactOpen}
      onClose={() => setIsContactOpen(false)}
    />
    </>
  );
};

export default SiteNav;
