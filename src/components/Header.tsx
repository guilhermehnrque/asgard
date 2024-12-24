import React from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[50px] bg-white text-black p-4 z-20 border-b border-gray-300">
      <div className="flex justify-between items-center w-full h-full">
        <div className="absolute left-4">
          <button
            className="sm:hidden p-4 text-black bg-transparent border-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>

        <div className="flex-grow text-center font-semibold">
          Título da página
        </div>

        <nav className="absolute right-4">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Sair</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
