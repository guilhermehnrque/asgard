import CardForm from "@/components/cards/CardForm";
import Content from "@/components/Content";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { menuItems } from "@/config/organizer/ItensMenu";
import { useState } from "react";

const GroupCreate: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} menuItems={menuItems} />
            <Header toggleSidebar={toggleSidebar} title="Criar Grupo" />

            <Content>
                <Grid className="sm:grid-cols-2 lg:grid-cols-1 gap-3" >
                    <CardForm >
                    </CardForm>
                </Grid>
            </Content>

        </div>
    );
}

export default GroupCreate;