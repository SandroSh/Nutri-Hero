

'use client'
import React from "react";
import { Tabs } from "antd";
import { TabsComponentProps } from "./Tab.config";

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
    return (
        <Tabs
            defaultActiveKey={defaultActiveKey}
            items={labels.map((label, index) => ({
                key: `${index + 1}`,
                label: label,
                children: children[index],
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



