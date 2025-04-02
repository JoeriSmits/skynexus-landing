import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

// app/layout.tsx
export const metadata = {
    title: 'SkyNexus – Fly Smart',
    description:
        'SkyNexus: Fly the B60 Duke with a shared economic model. Take contracts, track expenses, fly smart.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen bg-gradient-to-b from-sky-900 to-sky-600 text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
