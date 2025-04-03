'use client'
import React, { useState } from "react";
import { Tabs } from "antd";
import { TabsComponentProps } from "./Tab.config";
import { RecepiesCarousel } from "@/components/organisms/RecepiesCarousel";
import TabPane from "antd/es/tabs/TabPane";
import { access } from "node:fs/promises";

interface tabsType extends TabsComponentProps {
    labels: React.ReactNode[];
    children: React.ReactNode[];
}

const TabsComponent: React.FC<tabsType> = ({
    defaultActiveKey = "1",
    centered = true,
    className,
    labels,
    children
}) => {
    // const [activeTab, setActiveTab] = useState(defaultActiveKey);

    // const handleTabChange = (activeKey: React.SetStateAction<string> | undefined) => {
    //   setActiveTab(activeKey || defaultActiveKey);
    // };
    return (
        <Tabs
            defaultActiveKey={defaultActiveKey}
            items={labels.map((label, index) => ({
                key: `${index + 1}`,
                label: label,
                children: children[index],
                forceRender:true
            }))}
            tabPosition="top"
            centered={centered}
            tabBarStyle={{ display: 'flex' }}
            className={className}
            animated={{ tabPane: true }}

        />
    );
};

export default TabsComponent;



