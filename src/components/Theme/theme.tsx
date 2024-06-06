'use client';
import { useEffect, useState } from 'react';
import ColorThemeContext from '@/context/colorThemeContext';

const Theme = ({ children }: {children: React.ReactNode}) => {
    const themeFromStorage = typeof localStorage !== 'undefined' && localStorage.getItem('world-hotels-theme') ? JSON.parse(localStorage.getItem('world-hotel-theme') !) : false;

    const [ darknessTheme, setDarknessTheme ] = useState<boolean>(themeFromStorage);

    <ColorThemeContext.Provider value={{ darknessTheme, setDarknessTheme }}>
        <div className={`${darknessTheme}`}>

        </div>
    </ColorThemeContext.Provider>;
};

export default Theme;