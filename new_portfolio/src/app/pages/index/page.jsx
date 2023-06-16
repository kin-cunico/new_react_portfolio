"use client";
import styles from "../../page.module.css";
import Navbar from "../../components/Navbar";
import MainHero from "../../components/MainHero";
import Vitrine from "../../components/Vitrine";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

export default function Page({ items }) {
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

export async function getStaticProps() {
	const results = await fetch("out/_next/static/media?media_type=image");
	const preview = await results.json();
	const items = await preview.collection.items;
	return {
		props: { items },
	};
}
