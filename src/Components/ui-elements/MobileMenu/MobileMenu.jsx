import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MobileMenu = ({ menuLinks }) => {
  const navigate = useNavigate();
  const [expandedLinkId, setExpandedLinkId] = useState(null);

  const onMenuItemClick = (index) => {
    if (expandedLinkId === index) {
      setExpandedLinkId(null);
    } else {
      setExpandedLinkId(index);
    }
  };

  return (
    <div className="absolute w-[calc(100vw-2.1em)] top-14 left-5 bg-[#f0e4c3] pb-[20px] ">
      <div className="flex flex-col h-[calc(100%-4em)] m-8 overflow-auto ">
        <ul>
          {menuLinks?.map((record, index) => {
            console.log("front1", record);
            const Icon1 = record?.icon;
            return (
              <>
                <div className="relative group " key={record.name}>
                  <li
                    className="py-3 font-semibold rounded-lg cursor-pointer lg:px-4"
                    onClick={() => onMenuItemClick(index)}
                  >
                    <div className="flex justify-between text-[#9d7914]">
                      {record?.link ? (
                        <Link
                          to={record?.link}
                          className="text-[16px] font-bold flex justify-center items-center gap-2"
                        >
                          <div className="">
                            <Icon1 />
                          </div>{" "}
                          <div>{record?.name}</div>
                        </Link>
                      ) : (
                        <p className="text-[16px] font-bold flex justify-center items-center gap-2">
                          <div className="">
                            <Icon1 />
                          </div>
                          <div>{record?.name}</div>
                        </p>
                      )}
                      {Array.isArray(record?.subLinks) &&
                        record?.subLinks?.length !== 0 && (
                          <div className="w-8 h-8 p-1 font-bold">
                            {expandedLinkId === index ? (
                              <MinusIcon
                                className="w-5 h-5 text-[#9d7914] font-bold"
                                strokeWidth={3}
                              />
                            ) : (
                              <PlusIcon
                                className="w-5 h-5 text-[#9d7914] font-bold"
                                strokeWidth={3}
                              />
                            )}
                          </div>
                        )}
                    </div>
                    {expandedLinkId === index && (
                      <div className="w-full h-full">
                        <ul className="transition-all duration-500">
                          {record?.subLinks?.map((subLink) => {
                            const Icon2 = subLink?.icon;
                            return (
                              <li
                                className="pl-1 py-1 text-[#9d7914] cursor-pointer"
                                key={subLink?.name}
                              >
                                <Link
                                  to={subLink?.link}
                                  className="flex items-center"
                                >
                                  <div className="flex flex-col ml-1 py-2">
                                    <p className="font-bold flex justify-center items-center gap-2">
                                      <div className="">
                                        <Icon2 />
                                      </div>{" "}
                                      <div className="text-nowrap">
                                        <div>{subLink?.name}</div>
                                      </div>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {subLink?.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                </div>
                <div className="w-full my-2">
                  <div className="border-t border-[#9d7914]"></div>
                  {/* <div className="border-t-1 border-[#9d7914] mt-[1px]"></div> */}
                </div>
              </>
            );
          })}
          <div></div>
        </ul>
      </div>
    </div>
  );
};
