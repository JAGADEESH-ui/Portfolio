import type { Metadata } from "next";
import { Inter, Poppins, Caveat, Bricolage_Grotesque } from "next/font/google";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--poppins",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

const caveat = Caveat({
	subsets: ["latin"],
	variable: "--caveat",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const bricolage_grotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--bricolage_grotesque",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Jagadeesh G P",
	description: "Portfolio App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
			/>
			<body
				className={`${inter.variable} ${poppins.variable} ${caveat.variable} ${bricolage_grotesque.variable}`}
			>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
