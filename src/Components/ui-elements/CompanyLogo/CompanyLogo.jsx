import { Link } from "react-router-dom";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center">
      <div className="self-center text-xl font-bold text-gray-800 whitespace-nowrap dark:text-white hover:text-gray-200">
       <img src="" className="w-[80px] md:w-[90px] lg:w-[90px]" alt="Grow Startup"></img>
      </div>
    </Link>
  );
};
