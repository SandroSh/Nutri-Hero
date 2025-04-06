import { Navlink } from '@/components/atoms/NavLink';
import { activeClasses } from '@/components/atoms/NavLink/navlink.style';
import React, { useState, useEffect } from 'react';

interface Tab {
    key: string;
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];

}

const CustomTabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeKey, setActiveKey] = useState<string>(tabs[0].key);

    return (
        <div >
            <div className="flex justify-center mb-[22px]">
                {
                    tabs.map((tab) => (
                        <Navlink
                            className={`${activeKey == tab.key && activeClasses} mx-[29px] pt-[8px] pb-[8px]`}
                            hoverAnimate={false}
                            key={tab.key}
                            onClick={() => setActiveKey(tab.key)}
                        >{tab.title}
                        </Navlink>
                    ))}
            </div>
            {activeKey && (
                <div
                    id={activeKey}
                >
                    {tabs.find(tab => tab.key === activeKey)?.content}
                </div>
            )}
        </div>
    );
};

export default CustomTabs;