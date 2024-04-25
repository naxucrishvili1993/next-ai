import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "../components/ThemeSwitch";

const fontSans = FontSans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI Chatbot",
	description: "Simple AI Chatbot Application with NextJs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`min-h-[100dvh] bg-blue-100 dark:bg-zinc-800 relative`}>
				<Providers>
					<ThemeSwitch />
					{children}
				</Providers>
			</body>
		</html>
	);
}
