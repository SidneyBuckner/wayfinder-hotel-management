import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const fira = Fira_Code({ subsets: [ 'latin' ], weight: [ '300', '400', '500','700' ], style: [ 'normal' ], variable: '--font-fira' });
// const lora  = Lora({ subsets: [ 'latin' ], weight: [ '400' ], style: [ 'italic', 'normal' ], variable: '--font-lora' });

export const metadata: Metadata = {
    'title': 'Wayfinder - Hotel Management',
    'description': 'A Kingdom Hearts themed hotel management system ',
};

export default function RootLayout({
    children,
}: {
children: React.ReactNode;
}){
    return (
        <html lang="en" >
            <body className={fira.className}>
                    <main className="font-normal">
                        <Header/>
                        {children}
                        <Footer/>
                        {/* Footer Component */}
                    </main>
            </body>
        </html>
    );
}
