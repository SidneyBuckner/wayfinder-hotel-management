import Link from 'next/link';

const Header = () => (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='flex items-center w-full md:2/3'>
            {/* <p>Wayfinder - A world away from home.</p> */}
            <Link href='/' className='text-[#ff4040]'>Home</Link>
        </div>
        <ul className="items-center ml-5">
            <li>Worlds</li>
            <li>Listings</li>
        </ul>
    </header>);

export default Header;