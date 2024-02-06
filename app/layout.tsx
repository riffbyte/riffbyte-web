import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Oleg Semyonov',
    description: 'Full Stack Developer based in Tbilisi, Georgia',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.className,
                    'bg-concrete text-ebony dark:bg-ebony dark:text-concrete',
                )}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
