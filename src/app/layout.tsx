import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Taillwind CSS Study"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='antialiased' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class'>
					<div className='min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900'>
						<Sidebar />
						<main className='px-4 pb-12 pt-24 lg:px-8 lg:pt-8 w-full'>
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
