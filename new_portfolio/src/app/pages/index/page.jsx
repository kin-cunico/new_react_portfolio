"use client";
import styles from "../../page.module.css";
import Navbar from "../../components/Navbar";
import MainHero from "../../components/MainHero";
import Vitrine from "../../components/Vitrine";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

export default function Page() {
	//mounting to lazy loading
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);
	return (
		<>
			{mounted && (
				<main className={styles.main}>
					<Navbar />
					<MainHero />
					<Vitrine />
					<Footer id="contacts" />
				</main>
			)}
		</>
	);
}
