'use client';
import React from 'react'

import { useState, useEffect } from 'react';

import {HtmlIcon, CssIcon, ReactIcon, NodeIcon, 
        CppIcon, PythonIcon, FlutterIcon, MongoIcon, 
        MysqlIcon, UnityIcon, VisualIcon } from "@/app/components/svg/icons";


const SkillBar = ({ Icon, percentage, index}) => {
    const [filled, setFilled] = useState(false);

    const delay = 100 + (index * 100);

    useEffect(() =>{
        const timer = setTimeout(() => setFilled(true), delay);
        return () => clearTimeout(timer);
    }, []);


  return (
    <div className="flex items-center gap-[0.3125rem]">
        <Icon className="icon"/>
        <div className="w-[7rem] h-[0.5rem] bg-cream rounded-[0.125rem] overflow-hidden">
            <div className={`h-full bg-accent rounded-[0.125rem] origin-left transition-all duration-1000 ease-out`} style={{width: filled ? `${percentage}%` : '0%'}}></div>
        </div>

    </div>
  )
}

export default SkillBar