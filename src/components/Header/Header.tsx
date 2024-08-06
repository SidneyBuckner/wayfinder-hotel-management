import Link from 'next/link';
import { IoMdSettings } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import ColorThemeContext from '@/context/colorThemeContext';

const Header = () => {
    const { darknessTheme, setDarknessTheme } = useContext(ColorThemeContext);

    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-wrap items-center justify-between">
            <div className="flex items-center w-full md:2/3">
                <p><Link href="/" className="text-tertiary-dark"> Wayfinder - A World Away From Home</Link></p>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all"><Link href="/worlds">Worlds</Link></li>
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all"><Link href="/rooms">Rooms</Link></li>
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all"><Link href="/about">About</Link></li>
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all"><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/auth">
                            <IoMdSettings className="cursor-pointer"/>
                        </Link>
                    </li>
                    <li className="ml-5 cursor-pointer hover:-translate-y-2 duration-500 transition-all">
                        {/* <a href="/">   */}
                        {/* Replace with your desired link */}
                            {/* <FaHeart className="cursor-pointer" alt="Light Mode" /> */}
                        {darknessTheme ? <FaHeart className="cursor-pointer" alt="Light Mode" />: <FaHeart className="cursor-pointer" alt="Light Mode" />}
                        </a>
                    </li>
                </ul>
            </div>
        </header>);
};

export default Header;