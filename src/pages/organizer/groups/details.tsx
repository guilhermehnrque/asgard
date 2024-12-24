import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu";
import MainContent from "@/components/Main";
import Card from "@/components/cards/Card";

const GroupDetails: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const detailsData = [
        { description: "Tipo do esporte:", value: "Vôlei" },
        { description: "Visibilidade do grupo:", value: "Privado" },
        { description: "Status da lista:", value: "Em rollout" },
        { description: "Data de criação:", value: "01/01/2025" },
        { description: "Quantidade de membros:", value: "18" },
        { description: "Mínimo de jogadores:", value: "6" },
        { description: "Máximo de jogadores:", value: "18" },
    ];

    const addressData = [
        { description: "Descrição do Local:", value: "Praça míguel Angelo" },
        { description: "Endereço:", value: "Rua miguel angelo" },
        { description: "Número:", value: "SN" },
        { description: "Bairro:", value: "Laranjeiras" },
        { description: "Cidade:", value: "Serra" },
        { description: "Estado:", value: "ES" },
    ];

    const groupMembers = [
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        { description: "Nome:", value: "Pedrini" },
        

    ];

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />

            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} />

                <MainContent title="Grupo de vôlei do Kinho" description="">
                    <Card title={"Detalhes"} body={detailsData} />
                    <Card title={"Endereço"} body={addressData} />
                    <Card title={"Membros do grupo"} body={groupMembers} />
                </MainContent>
            </div>
        </div>
    );
};

export default GroupDetails;