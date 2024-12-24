import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    menuItems: { label: string; href: string; subItems?: { label: string; href: string }[] }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, menuItems }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

    // Ensure the correct groups are open based on the current route
    useEffect(() => {
        const initialOpenGroups: Record<string, boolean> = {};
        menuItems.forEach((item) => {
            if (item.subItems?.some((subItem) => router.pathname.startsWith(subItem.href))) {
                initialOpenGroups[item.label] = true;
            }
        });
        setOpenGroups(initialOpenGroups);
    }, [router.pathname, menuItems]);

    const handleSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleGroupClick = (key: string) => {
        setOpenGroups((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="relative h-screen">
            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20 transition-opacity duration-300 ${isOpen ? "opacity-70 visible" : "opacity-0 invisible"
                    }`}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`w-[70%] h-full bg-[#171717] text-white fixed top-0 left-0 z-30 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:w-64 lg:relative lg:translate-x-0`}
                onClick={handleSidebarClick}
            >
                <div className="p-4">
                    <h2 className="text-2xl mb-6">GDO</h2>
                    <ul>
                        {menuItems.map((item) => {
                            const isOpen = openGroups[item.label];
                            return (
                                <li key={item.href} className="mb-2">
                                    {/* Item with SubItems */}
                                    {item.subItems ? (
                                        <>
                                            <div
                                                onClick={() => handleGroupClick(item.label)}
                                                className={`flex items-center justify-between p-2 cursor-pointer ${router.pathname.startsWith(item.href) ? "bg-gray-800" : "hover:bg-gray-800"
                                                    } rounded-md`}
                                            >
                                                <span>{item.label}</span>
                                                <span>{isOpen ? "−" : "+"}</span>
                                            </div>
                                            {/* SubItems */}
                                            {isOpen && (
                                                <ul className="ml-4 mt-2">
                                                    {item.subItems.map((subItem) => (
                                                        <li
                                                            key={subItem.href}
                                                            className={`mb-1 ${router.pathname === subItem.href ? "bg-gray-700" : "hover:bg-gray-700"
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
                                        <a
                                            href={item.href}
                                            className={`flex items-center p-2 mt-1 rounded-md ${router.pathname === item.href ? "bg-gray-800" : "hover:bg-gray-800"
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
