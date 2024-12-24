import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  menuItems: { label: string; href: string; subItems?: { label: string; href: string }[] }[]; // Allow subItems
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, menuItems }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const [isGroupOpen, setIsGroupOpen] = useState(false);

  const handleSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleGroupClick = () => {
    setIsGroupOpen(!isGroupOpen); 
  };

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        onClick={toggleSidebar}
      ></div>

      <div
        ref={sidebarRef}
        className={`w-[70%] h-full bg-[#171717] text-white fixed top-0 left-0 z-30 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-64 lg:relative lg:translate-x-0`}
        onClick={handleSidebarClick}
      >
        <div className="p-4">
          <h2 className="text-2xl mb-6">GDO</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.href}
                className={`${
                  router.pathname === item.href ? "bg-gray-800" : "hover:bg-gray-800"
                } rounded-md cursor-pointer`}
              >
                {/* Se o item for "Grupo", cria um grupo expansível */}
                {item.label === "Grupo" ? (
                  <>
                    <div
                      onClick={handleGroupClick}
                      className={`flex items-center p-2 mt-1 cursor-pointer ${
                        router.pathname === item.href ? "bg-gray-800" : ""
                      }`}
                    >
                      {item.label}
                    </div>
                    {isGroupOpen && item.subItems && (
                      <ul className="ml-4">
                        {item.subItems.map((subItem) => (
                          <li
                            key={subItem.href}
                            className={`${
                              router.pathname === subItem.href ? "bg-gray-700" : "hover:bg-gray-700"
                            } rounded-md`}
                          >
                            <a href={subItem.href} className="flex items-center p-2">
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className="flex items-center p-2 mt-1">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
