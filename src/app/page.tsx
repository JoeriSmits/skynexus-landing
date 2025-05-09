'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ClipboardList, Settings, Globe, Medal } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
    const [modalImage, setModalImage] = useState<string | null>(null);

    return (
        <div className="bg-background text-foreground scroll-smooth relative">
            <Head>
                <title>SkyNexus – Fly Smart</title>
                <meta
                    name="description"
                    content="SkyNexus: Fly contracts, earn virtual cash, manage your fleet. A new kind of flight sim economy."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
                <Image
                    src="/hero-aircraft.webp"
                    alt="Beechcraft Duke B60"
                    fill
                    priority
                    className="object-cover object-center opacity-20 pointer-events-none z-0"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl w-full pt-24 pb-10 space-y-12">
                    <div className="flex justify-center">
                        <Image
                            src="/skynexus.svg"
                            alt="SkyNexus Logo"
                            width={260}
                            height={260}
                            className="mb-2"
                        />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
                        Fly Smart. Build Your Legacy.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Join a shared virtual airline where every flight counts.
                        Fly contracts, track fuel, manage aircraft and finances.
                    </p>

                    <div className="flex flex-col items-center gap-2">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://discord.gg/rsyJxRTbVv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-xl shadow-md hover:bg-primary/90 transition">
                            Apply as Pilot on Discord
                        </motion.a>
                        <span className="text-sm text-muted-foreground">
                            Get early access to the Beta program
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-muted-foreground text-sm md:text-base">
                        <TeaserFeature
                            icon={
                                <ClipboardList className="w-5 h-5 text-muted-foreground opacity-70" />
                            }
                            title="Fly Real Contracts"
                            text="Choose flights with time limits, aircraft availability, and real costs."
                        />
                        <TeaserFeature
                            icon={
                                <Settings className="w-5 h-5 text-muted-foreground opacity-70" />
                            }
                            title="Manage the Fleet"
                            text="Wear and maintenance affect availability and operating costs."
                        />
                        <TeaserFeature
                            icon={
                                <Globe className="w-5 h-5 text-muted-foreground opacity-70" />
                            }
                            title="Use the Interactive Map"
                            text="Track fuel prices, contracts, and aircraft locations."
                        />
                    </motion.div>

                    <a
                        href="#features"
                        className="block mt-12 text-muted-foreground hover:text-foreground transition text-sm">
                        Scroll to Full Features ↓
                    </a>
                </motion.div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="scroll-mt-20 py-20 px-6 max-w-6xl mx-auto space-y-24">
                {[
                    {
                        title: 'Contract-Based Flying',
                        text: 'Take on real-time contracts and build a reputation. Each flight affects your reputation and the company.',
                        imageUrl: '/features/contracts.jpg',
                        icon: (
                            <ClipboardList className="w-5 h-5 text-muted-foreground opacity-70" />
                        ),
                        flip: false,
                    },
                    {
                        title: 'Maintenance & Strategy',
                        text: 'Aircraft wear down over time. Schedule maintenance, reposition planes, and keep the fleet efficient.',
                        imageUrl: '/features/maintenance.jpg',
                        icon: (
                            <Settings className="w-5 h-5 text-muted-foreground opacity-70" />
                        ),
                        flip: true,
                    },
                    {
                        title: 'Map-Driven Planning',
                        text: 'Interactive map lets you find and accept contracts, monitor prices, and make smart moves.',
                        imageUrl: '/features/map.jpg',
                        icon: (
                            <Globe className="w-5 h-5 text-muted-foreground opacity-70" />
                        ),
                        flip: false,
                    },
                    {
                        title: 'Flight Analysis & Reputation',
                        text: 'Analyze your flights, track performance, and build a reputation. Your actions matter.',
                        imageUrl: '/features/analysis.jpg',
                        icon: (
                            <Medal className="w-5 h-5 text-muted-foreground opacity-70" />
                        ),
                        flip: true,
                    },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}>
                        <Feature {...feature} onImageClick={setModalImage} />
                    </motion.div>
                ))}
            </section>

            <footer className="text-center py-10 text-muted-foreground border-t border-border">
                &copy; {new Date().getFullYear()} SkyNexus. All rights reserved.
            </footer>

            {/* Image Modal */}
            {modalImage && (
                <div
                    onClick={() => setModalImage(null)}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out">
                    <Image
                        src={modalImage}
                        alt="Zoomed"
                        width={1200}
                        height={800}
                        className="rounded-lg max-h-[90vh] object-contain"
                    />
                </div>
            )}
        </div>
    );
}

function TeaserFeature({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md shadow-sm hover:border-white/30 transition">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-muted-foreground">{icon}</span>
                <span className="font-semibold text-white">{title}</span>
            </div>
            <p className="text-sm text-muted-foreground">{text}</p>
        </div>
    );
}

function Feature({
    title,
    text,
    imageUrl,
    icon,
    flip = false,
    onImageClick,
}: {
    title: string;
    text: string;
    imageUrl: string;
    icon: React.ReactNode;
    flip?: boolean;
    onImageClick: (src: string) => void;
}) {
    return (
        <div
            className={`flex flex-col md:flex-row ${
                flip ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}>
            <div
                className="md:w-1/2 cursor-zoom-in"
                onClick={() => onImageClick(imageUrl)}>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={350}
                    className="rounded-xl shadow-lg w-full object-cover max-h-[350px]"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-muted-foreground">{icon}</span>
                    <h2 className="text-3xl font-bold">{title}</h2>
                </div>
                <p className="text-lg text-muted-foreground">{text}</p>
            </div>
        </div>
    );
}
