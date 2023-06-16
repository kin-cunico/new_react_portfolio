import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const press_Start_2P = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
	title: "Kin Cunico.dev",
	description: "Developed by Kin Cunico",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={press_Start_2P.className}>{children}</body>
		</html>
	);
}
