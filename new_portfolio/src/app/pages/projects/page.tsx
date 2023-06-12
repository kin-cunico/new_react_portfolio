import styles from "src/app/styles/SubHero.module.css";
import Navbar from "../../components/Navbar";

export default function SubHero() {
	return (
		<main className={styles.main}>
			<Navbar />
			<h1>Projects</h1>
			<div className={styles.projects_container}>
				<div className={`${styles.proj_sm_cont}`}>Project 1</div>
				<div className={`${styles.proj_sm_cont}`}>Project 1</div>
				<div className={`${styles.proj_sm_cont}`}>Project 1</div>
				<div className={`${styles.proj_sm_cont}`}>Project 1</div>
			</div>
		</main>
	);
}
