import Head from 'next/head';

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-sky-800 to-sky-600 text-white flex items-center justify-center overflow-hidden">
            <Head>
                <title>SkyNexus – Fly Smart</title>
                <meta
                    name="description"
                    content="SkyNexus: Fly the B60 Duke with a shared economic model. Take contracts, track expenses, fly smart."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-20 z-0"></div>

            {/* Glass effect content card */}
            <main className="relative z-10 p-10 max-w-2xl w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-center">
                <h1 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                    SkyNexus
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    Your gateway to shared Flight Simulation operations.
                    SkyNexus lets you fly on-demand while tracking expenses and
                    balancing the books in real-time.
                </p>
                <h2 className="text-lg font-bold text-white/90 leading-relaxed">
                    Work in progress – stay tuned for updates!
                </h2>
            </main>

            <footer className="absolute bottom-6 text-sm text-white/70 z-10">
                &copy; {new Date().getFullYear()} SkyNexus. All rights reserved.
            </footer>
        </div>
    );
}
