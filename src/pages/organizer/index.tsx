import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu"; // Importa os itens do menu
import Content from "@/components/Content";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />
            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} />
                <Content>
                    <h1 className="text-3xl font-bold text-black">conteudo</h1>
                </Content>
            </div>
        </div>
    );
};

export default Home;