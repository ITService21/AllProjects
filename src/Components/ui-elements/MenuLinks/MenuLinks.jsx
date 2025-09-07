import { SubLinksBox } from "./LinkSubItems";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
export const MenuLinks = ({ menuLinks }) => {
  const navigate = useNavigate();
  console.log("MenuLinks1", menuLinks);
  return (
    <ul className="flex px-1 lg:px-4">
      {menuLinks?.map((menuLink) => (
        <div className="relative group " key={menuLink?.name}>
          <li className="">
            <Link
              to={menuLink?.link}
              className={`flex dark:hover:bg-slate-800 p-2 font-semibold cursor-pointer md:px-2 lg:px-3 text-[#ffffff] font-roboto hover:bg-slate-200 md:text-[1.2vw] lg:text-[1.0vw] ${menuLink?.class}`}
            >
              {menuLink?.name}
              {Array?.isArray(menuLink?.subLinks) &&
                menuLink?.subLinks?.length !== 0 && (
                  <div className="w-4 my-auto mx-1">
                    <ChevronDownIcon />
                  </div>
                )}
            </Link>
          </li>
          {Array.isArray(menuLink?.subLinks) &&
            menuLink?.subLinks?.length !== 0 && (
              <div className="hidden group-hover:block">
                <SubLinksBox subLinks={menuLink?.subLinks} />
              </div>
            )}
        </div>
      ))}
      {/* <div>
        {localStorage?.getItem("isAdmin") ? (
          <button
            className="md:text-[12px] lg:text-[16px] ml-2 bg-[#ff601c] hover:opacity-[0.8] text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              navigate("/admin-logout");
            }}
          >
            S.K.S (Admin)
          </button>
        ) : (
          <button
            className="md:text-[12px] lg:text-[16px] ml-2 bg-[#ff0077] hover:opacity-[0.8] text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              navigate("/admin-panel");
            }}
          >
              Admin Panel
          </button>
        )}
      </div> */}
    </ul>
  );
};
