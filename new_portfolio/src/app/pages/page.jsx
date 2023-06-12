import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import MainHero from "../components/MainHero";
import SubHero from "./projects/page";
import Footer from "../components/Footer";

export default function page({}) {
	return (
		<main className={styles.main}>
			<Navbar />
			<MainHero />
			<SubHero />
			<Footer />
		</main>
	);
}
