// WhatsAppIcon.js
import React from "react";

const WhatsAppIcon = () => {
  const phoneNumber = "9555095503"; // Replace with your WhatsApp number
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-3 md:right-4 top-[95%] md:top-[92%] transform -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-green-600">
      {" "}
      {/* <div className="text-black -mt-4  whitespace-nowrap">Chat Us</div>{" "} */}
      <div onClick={openWhatsApp}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
