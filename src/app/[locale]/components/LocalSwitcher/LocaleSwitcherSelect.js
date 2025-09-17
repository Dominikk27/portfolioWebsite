"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { IoLanguage } from "react-icons/io5";

const LocaleSwitcherSelect = ({ locale, children }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const onSelectChange = (e) => {
        const newLocale = e.target.value;
        startTransition(() =>{
            router.push(`/${newLocale}`);
            router.refresh();
        })
    }

    return(
        <div className='flex justify-center items-center bg-transparent text-white border border-white/20 rounded px-2 py-1 gap-[0.3rem]'>
        <label htmlFor="locale"><IoLanguage className='w-[1.5rem] h-[1.5rem] text-accent'/></label>
            <select value={locale}
                    id='locale'
                    disabled={isPending}
                    onChange={onSelectChange}
                    className="focus:outline-none">
                {children}
            </select>
        </div>
    )

}

export default LocaleSwitcherSelect