import styles from "../styles/SubHero.module.css";

export default function SubHero() {
	return (
		<main className={styles.main}>
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
