import React, { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Content: React.FC<MainProps> = ({ children }) => {
    return (
        <div className="flex-1 w-full pt-20 pr-4 pl-4">
            {children}
        </div>
    );
};

export default Content;
