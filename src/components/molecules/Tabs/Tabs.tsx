'use client'
import React from "react";
import { Tabs } from "antd";
import { TabsComponentProps } from "./Tab.config";
import { Navlink } from "@/components/atoms/NavLink";
import { ExerciseCard } from "../ExerciseCard";


const TabsComponent: React.FC<TabsComponentProps> = ({
    defaultActiveKey = "1",
    tabs,
    centered = true,
    className,
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
        />
    );
};

export default TabsComponent;