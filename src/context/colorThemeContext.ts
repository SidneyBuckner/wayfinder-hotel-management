import { Dispatch, SetStateAction, createContext } from 'react';

type ColorThemeContextType = {
    darknessTheme: boolean;
    setDarknessTheme: Dispatch <SetStateAction<boolean>>;
}
const ColorThemeContext = createContext <ColorThemeContextType<boolean>>({
    darknessTheme: false,
    setDarknessTheme: () => null,
});

export default ColorThemeContext;