import React from 'react'
import Image from 'next/image'

// --- Компоненты и картинки ---
import iconSrc from './logo.svg';
import { Profile } from '../profile/profile';
import { ArrowDownIcon } from './arrow-down-icon';
import { UiButton } from '../uikit/ui-button';

export function Header() {
    return (
        <header className='flex h-24 items-center px-8 bg-white shadow-md'>
            <Image src={iconSrc} alt='logo' />
            <div className='w-px h-8 bg-slate-200 mx-6' />
            <UiButton className="w-44" variant='primary' size='lg'>Играть</UiButton>
            <button className='ml-auto flex items-center gap-2 text-teal-600'>
                <Profile />
                <ArrowDownIcon />
            </button>
        </header>
    )
}
