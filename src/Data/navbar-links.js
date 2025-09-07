import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaCheckCircle,
  FaUsers,
  FaImages,
  FaEnvelope,
  FaBuilding,
  FaBullseye,
  FaTools,
  FaCertificate,
  FaPlane,
  FaShieldAlt,
  FaBoxes,
  FaSearch,
  FaBalanceScale,
  FaClipboardCheck,
  FaWarehouse,
  FaHandshake,
  FaUserFriends,
  FaPhotoVideo,
  FaVideo,
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
      { name: "Mission & Vision", link: "/about-us/mission-vision", icon: FaBullseye },
      { name: "Our Team", link: "/about-us/ourteam", icon: FaTools },
      { name: "Certifications", link: "/about-us/certifications", icon: FaCertificate },
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
    name: "GALLERY",
    link: null,
    class: "",
    icon: FaImages,
    subLinks: [
      { name: "Album", link: "/gallery/album", icon: FaPhotoVideo },
      { name: "Videos", link: "/gallery/videos", icon: FaVideo },
    ],
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
