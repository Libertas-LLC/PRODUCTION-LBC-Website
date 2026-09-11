import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { NEXUDUS_MEMBER_LOGIN_URL } from "../config/nexudus";

// Shared site footer, shown on every page (home + the embed pages).
// The Navigation list mirrors the header menu (Home, Events, Bookings,
// Member Login, Join); keep the two in sync when the menu changes.
const SiteFooter = () => (
  <footer id="contact" className="bg-white pt-16">
    <div className="container mx-auto px-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-xs">
          <img
            src="/Assets/LBC Primary.svg"
            alt="LBC Logo"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-sm font-bold mb-4" style={{ color: "#F5A623" }}>
            Together Is How We Grow
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-[#F5A623]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ethos" className="hover:text-[#F5A623]">
                Ethos
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-[#F5A623]">
                Events
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="hover:text-[#F5A623]">
                Bookings
              </Link>
            </li>
            <li>
              <a href={NEXUDUS_MEMBER_LOGIN_URL} className="hover:text-[#F5A623]">
                Member Login
              </a>
            </li>
            <li>
              <Link to="/join" className="hover:text-[#F5A623]">
                Join
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:Hello@LBCCarbonvalley.com"
                className="hover:text-[#F5A623] transition-colors"
              >
                Hello@LBCCarbonvalley.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:3032230723" className="hover:text-[#F5A623] transition-colors">
                303-223-0723
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 501 Walnut St. Frederick, CO 80530
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/localbusinesscollaborative/"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-local-business-collaborative"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/LocalBusinessCollaborative"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 font-bold">
        © 2025 Local Business Collaborative. All rights reserved.
      </div>
    </div>

    {/* Thread divider, matching the home page */}
    <div className="w-full">
      <img
        src="/Assets/thread_image.png"
        alt=""
        className="w-full h-auto max-h-5 object-cover block"
      />
    </div>
  </footer>
);

export default SiteFooter;
