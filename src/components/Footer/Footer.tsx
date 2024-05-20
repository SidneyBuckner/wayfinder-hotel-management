import Link from 'next/link';
import { TbMail } from 'react-icons/tb';
import { PiPhoneLight } from 'react-icons/pi';

const Footer = () => (
    <footer className="mt-16">
        <div className="container mx-auto px-4">
            <p className='font-semibold text-[18px] py-6'><Link href="https://github.com/SidneyBuckner/wayfinder-hotel-management" className="text-tertiary-dark">
                An App By Sidney Buckner
            </Link></p>
            <div className="flex flex-wrap gap-16 items-center justify-between">
                <div className="flex-1">
                    <p>13 Bastion Court, Radiant Garden 07013</p>
                    <div className="flex items-center py-4">
                        <Link href="#">
                            <TbMail style={{ 'display': 'inline-block' }} />
                            <p className="ml-2 inline">Support.wayfinder.xom</p></Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="#"> <PiPhoneLight style={{ 'display': 'inline-block' }}/>  +1 X00 007 0713</Link>
                    </div>
                </div>

                <div className="flex-1 md:text-right">
                    <p className="pb-4">Our Story</p>
                    <p className="pb-4">Our Privacy Commitment</p>
                    <p className="pb-4">Terms of service</p>
                </div>

                <div className="flex-1 md:text-right">
                    <p className="pb-4">Dining Experience</p>
                    <p className="pb-4">Sports</p>
                    <p className="pb-4">Events</p>
                </div>
            </div>
        </div>
        <div className='h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
);

export default Footer;