import {
  FaHome,
  FaInfoCircle,
  FaImages,
  FaEnvelope,
  FaBuilding,
  FaCertificate,
  FaVideo,
  FaMoneyBillWave,
  FaAward,
  FaChartLine,
  FaGavel,
  FaCogs,
  FaHandshake,
} from "react-icons/fa";

export const NavbarLinks = [
  {
    name: "HOME",
    link: "/home",
    icon: FaHome,
    subLinks: [],
    class: ""
  },
  {
    name: "ABOUT US",
    // link: "/about-us",
    icon: FaInfoCircle,
    subLinks: [
      { name: "Company Overview", link: "/about-us/overview", icon: FaBuilding },
      { name: "Certifications", link: "/about-us/certifications", icon: FaCertificate },
      { name: "Our Partners", link: "/about-us/partners", icon: FaHandshake },
    ],
  },
  // {
  //   name: "PRODUCTS",
  //   // link: "/products",
  //   class: "",
  //   icon: FaBoxOpen,
  //   subLinks: [
  //     { name: "Aerospace Coatings", link: "/products/aerospace-coatings", icon: FaPlane },
  //     { name: "Defence Coatings", link: "/products/defence-coatings", icon: FaShieldAlt },
  //     { name: "Allied Products", link: "/products/allied-products", icon: FaBoxes },
  //     { name: "Explore All Products", link: "/products/all", icon: FaSearch },
  //   ],
  // },
  // {
  //   name: "WHY CHOOSE US",
  //   // link: "/why-choose-us",
  //   class: "",
  //   icon: FaCheckCircle,
  //   subLinks: [
  //     { name: "ISO & Startup India Certified", link: "/why-choose-us/certifications", icon: FaCertificate },
  //     { name: "OEM & Defense Approved", link: "/why-choose-us/approvals", icon: FaClipboardCheck },
  //     { name: "Cold Storage & Infrastructure", link: "/why-choose-us/infrastructure", icon: FaWarehouse },
  //     { name: "NSN-Coded Inventory", link: "/why-choose-us/nsn-inventory", icon: FaBalanceScale },
  //     { name: "Global Brand Partnerships", link: "/why-choose-us/partners", icon: FaHandshake },
  //   ],
  // },
  // {
  //   name: "CLIENTS & PARTNERS",
  //   // link: "/clients-partners",
  //   class: "",
  //   icon: FaUsers,
  //   subLinks: [
  //     { name: "Our Clients", link: "/clients-partners/clients", icon: FaUserFriends },
  //     { name: "Our Partners", link: "/clients-partners/partners", icon: FaHandshake },
  //   ],
  // },

   {
    name: "SERVICES",
    // link: "/services",
    class: "",
    icon: FaCogs,
    subLinks: [
      { name: "All Services", link: "/services/all", icon: FaCogs },
      { name: "Funding Consultant", link: "/services/funding", icon: FaMoneyBillWave },
      { name: "Certificate Consultant", link: "/services/certificate", icon: FaAward },
      { name: "Marketing Services", link: "/services/marketing", icon: FaChartLine },
      { name: "Legal Services", link: "/services/legal", icon: FaGavel },
    ],
  },
  {
    name: "GALLERY",
    link: null,
    class: "",
    icon: FaImages,
    subLinks: [
      { name: "Photo Albums", link: "/gallery/albums", icon: FaImages },
      // { name: "Videos", link: "/gallery/videos", icon: FaVideo },
    ],
  },

   {
    name: "BLOG",
    link: "/blog",
    class: "",
    icon: FaEnvelope,
    subLinks: [],
  },
  {
    name: "CONTACT US",
    link: "/contact-us",
    class: "",
    icon: FaEnvelope,
    subLinks: [],
  },

];

export default NavbarLinks;
