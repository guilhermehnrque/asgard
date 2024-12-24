import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu";
import Content from "@/components/Content";
import CardItem from "@/components/cards/CardItem";
import CardTable from "@/components/cards/CardTable";
import Grid from "@/components/Grid";


const GroupDetails: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const detailsData = {
        title: "Grupo de vôlei do Pedrini",
        lines: [
            { description: "Tipo do esporte:", value: "Vôlei" },
            { description: "Visibilidade do grupo:", value: "Privado" },
            { description: "Status da lista:", value: "Em rollout" },
            { description: "Data de criação:", value: "01/01/2025" },
            { description: "Quantidade de membros:", value: "18" },
            { description: "Mínimo de jogadores:", value: "6" },
            { description: "Máximo de jogadores:", value: "18" },
        ],
    };

    const addressData = {
        title: "Endereço",
        lines: [
            { description: "Descrição do Local:", value: "Praça míguel Angelo" },
            { description: "Endereço:", value: "Rua miguel angelo" },
            { description: "Número:", value: "SN" },
            { description: "Bairro:", value: "Laranjeiras" },
            { description: "Cidade:", value: "Serra" },
            { description: "Estado:", value: "ES" },
        ],
    };

    const tableData = {
        title: "Membros do grupo",
        table_data: {
            headers: [
                { header: "#", accessor: "number" },
                { header: "Nome", accessor: "name" },
                { header: "Membro desde", accessor: "join_date" },
                { header: "Status", accessor: "status" },
            ],
            body: [
                { number: "1", name: "Guiro", join_date: "01/01/2025", status: "Ativo" },
                { number: "2", name: "Ana", join_date: "10/01/2025", status: "Inativo" },
            ],
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />

            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} title="Detalhes do grupo" />
                <Content>
                    <Grid className="sm:grid-cols-2 lg:grid-cols-2 gap-3" >
                        <CardItem title={detailsData.title} lines={detailsData.lines} />
                        <CardItem title={addressData.title} lines={addressData.lines} />
                    </Grid>

                    <Grid className="sm:grid-cols-1 lg:grid-cols-1 gap-3 pt-" >
                        <CardTable
                            title={tableData.title}
                            tableData={tableData.table_data}
                        />
                    </Grid>

                </Content>

            </div>
        </div>
    );
};

export default GroupDetails;
