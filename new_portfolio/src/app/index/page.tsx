import * as React from "react";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import MainHero from "../components/MainHero";
import SubHero from "../components/SubHero";
import Footer from "../components/Footer";

export default function Index() {
	return (
		<main className={styles.main}>
			<Navbar />
			<MainHero />
			<SubHero />
			<Footer />
		</main>
	);
}
