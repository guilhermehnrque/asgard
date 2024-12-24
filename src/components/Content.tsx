import React, { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
    className?: string
}

const Content: React.FC<MainProps> = ({ children, className }) => {
    const safeChildren = React.Children.toArray(children);

    return (
        <div className="flex-1 w-full pt-20 pr-4 pl-4">
            <div className={`grid grid-cols-1 ${className}`}>
                {safeChildren.length > 1 ? (
                    safeChildren.map((child, index) => (
                        <div key={index}>
                            {child}
                        </div>
                    ))
                ) : (
                    <div>
                        {safeChildren.length > 0 ? safeChildren : null}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;
