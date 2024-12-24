import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu"; // Importa os itens do menu
import MainContent from "@/components/Main";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />

            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} />
                <MainContent title="Dashboard" description="Descrição do dashboard buceta" />
            </div>
        </div>
    );
};

export default Home;