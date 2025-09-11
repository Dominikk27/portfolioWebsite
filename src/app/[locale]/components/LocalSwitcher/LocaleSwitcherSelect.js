"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'

const LocaleSwitcherSelect = ({ locale, children }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const onSelectChange = (e) => {
        const newLocale = e.target.value;
        startTransition(() =>{
            router.replace(`/${newLocale}`);
            router.refresh();
        })
    }

    return(
        <select value={locale}
                disabled={isPending}
                onChange={onSelectChange}>
            {children}
        </select>
    )

}

export default LocaleSwitcherSelect