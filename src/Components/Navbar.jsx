import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CompanyLogo } from "./ui-elements/CompanyLogo/CompanyLogo";
import { HamburgerButton } from "./ui-elements/HamburgerButton/HamburgerButton";
import { MenuLinks } from "./ui-elements/MenuLinks/MenuLinks";
import { MobileMenu } from "./ui-elements/MobileMenu/MobileMenu";
import { NavbarLinks } from "./../Data/navbar-links.js";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="relative z-40">
      {/* Curved background */}
      <div className="absolute bottom-0 left-0 w-full h-[70px] overflow-hidden z-[-1]">
        <div className="w-full h-full bg-gray-900 rounded-b-[100px]"></div>
      </div>

      {/* Actual Navbar */}
      <nav className="fixed top-0 left-0 flex items-center h-[60px] px-3 m-0 md:px-4 bg-gray-900 w-full z-50">
        <div className="flex items-center justify-between w-full md:mx-4 lg:mx-8 2xl:w-[80em] 2xl:mx-auto relative">
          {/* Logo Centered on Mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <CompanyLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div>
              <CompanyLogo />
            </div>
            <div className="ml-4 text-nowrap">
              <MenuLinks menuLinks={NavbarLinks} />
            </div>
          </div>

          {/* Hamburger on Right (Mobile) */}
          <div className="block md:hidden ml-auto">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden z-[40]">
          {isMobileMenuOpen && <MobileMenu menuLinks={NavbarLinks} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
