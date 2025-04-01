'use client'
import React from "react";
import { Tabs } from "antd";
import { TabsComponentProps } from "./Tab.config";
import { Navlink } from "@/components/atoms/NavLink";
import { ExerciseCard } from "../ExerciseCard";

interface tabsType extends TabsComponentProps {
    labels?:React.ReactNode;
    children?: React.ReactNode
}

const TabsComponent: React.FC<tabsType> = ({
    defaultActiveKey = "1",
    tabs,
    centered = true,
    className,
    labels,
    children,
    CardClassName,
    translate
}) => {
    return (
        <Tabs
            defaultActiveKey={defaultActiveKey}
            items={tabs.map((tab) => ({
                ...tab,
                label: <Navlink className="mx-[29px] pt-[8px] pb-[8px]" hoverAnimate={false} >{translate(`${tab.label}`)}</Navlink>,
                children: <ExerciseCard pTitle={translate(tab.pTitle)} pText={translate(tab.pText)} imageUrl={tab.imageUrl}  className={CardClassName}  />
                
            }))}
            tabPosition="top"
            centered={centered}
            tabBarStyle={{
                display:'flex',
            }}
            className={className}
            animated={{ tabPane: true }}
        />
    );
};

export default TabsComponent;

