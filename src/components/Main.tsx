import React from 'react';
import Body from './Body';

interface MainProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const MainContent: React.FC<MainProps> = ({ title, description, children }) => {
    return (
        <div className="flex-1 w-full pt-20">
            <div className="flex-1 w-full pr-4 pl-4">
                <Body title={title} description={description}>
                    {children}
                </Body>
            </div>
        </div>
    );
};

export default MainContent;
