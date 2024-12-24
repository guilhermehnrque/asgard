import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Content from "@/components/Content";
import CardItem from "@/components/cards/CardItem";
import Grid from "@/components/Grid";

const GroupsPage: React.FC = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const listDataTwo = [
        {
            "title": "Grupo de vôlei do Pedrini",
            "lines": [
                {
                    "description": "Tipo do esporte:",
                    "value": "Vôlei"
                },
                {
                    "description": "Status:",
                    "value": "Ativo"
                }
            ]
        },
        {
            "title": "Grupo de vôlei do Guiro",
            "lines": [
                {
                    "description": "Tipo do esporte:",
                    "value": "Vôlei"
                },
                {
                    "description": "Status:",
                    "value": "Ativo"
                }
            ]
        },
        {
            "title": "Grupo de vôlei do Guiro",
            "lines": [
                {
                    "description": "Tipo do esporte:",
                    "value": "Vôlei"
                },
                {
                    "description": "Status:",
                    "value": "Ativo"
                }
            ]
        },
        {
            "title": "Grupo de vôlei do Guiro",
            "lines": [
                {
                    "description": "Tipo do esporte:",
                    "value": "Vôlei"
                },
                {
                    "description": "Status:",
                    "value": "Ativo"
                }
            ]
        }
    ]

    const handleRedirect = () => {
        router.push("/organizer/groups/details");
    };

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />
            <div className="flex flex-1 flex-col">
                <Header toggleSidebar={toggleSidebar} title="Grupos" />

                <Content>
                    <Grid className="sm:grid-cols-2 lg:grid-cols-2 gap-3" >
                        {listDataTwo.map((item, index) => (
                            <CardItem
                                key={index}
                                title={item.title}
                                lines={item.lines}
                                footerContent={<Button
                                    onClick={handleRedirect}
                                    label="Detalhes">
                                </Button>}
                            />

                        ))}
                    </Grid>

                </Content>

            </div>
        </div>
    );
};

export default GroupsPage;