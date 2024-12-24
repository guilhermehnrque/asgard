import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu";
import MainContent from "@/components/Main";
import { useRouter } from "next/router";
import Card from "@/components/cards/Card";
import Button from "@/components/Button";

const GroupsPage: React.FC = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const listData = [
        { description: "Tipo do esporte:", value: "Vôlei" },
        { description: "Status:", value: "Ativo" },
    ];

    const handleRedirect = () => {
        router.push("/organizer/groups/details");
    };

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />

            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} />

                <MainContent title="Listagem dos grupos" description="">
                    <Card title={"Grupo de vôlei do Pedrini"} body={listData}>
                        <Button
                            onClick={handleRedirect}
                            label="Detalhes">
                        </Button>
                    </Card>
                </MainContent>

            </div>
        </div>
    );
};

export default GroupsPage;