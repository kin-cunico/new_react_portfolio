import styles from "src/app/styles/SubHero.module.css";
import Navbar from "../../components/Navbar";
import curiousHumans from "src/images/Orange Sky.png";
import Image from "next/image";

export default function SubHero() {
	return (
		<main className={styles.main}>
			<div className={styles.projects_out_container}>
				<h1>Projects</h1>
				<div className={styles.projects_container}>
					<div className={`${styles.proj_sm_cont}`}>
						<div className={styles.inside_proj_cont}>
							<Image
								src={curiousHumans}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Curious Humans</h4>
							<p>Freelance fullstack web application</p>
						</div>
					</div>
					<div className={`${styles.proj_sm_cont}`}>
						<div className={styles.inside_proj_cont}>
							<Image
								src={curiousHumans}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Curious Humans</h4>
							<p>Freelance fullstack web application</p>
						</div>
					</div>
					<div className={`${styles.proj_sm_cont}`}>
						<div className={styles.inside_proj_cont}>
							<Image
								src={curiousHumans}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Curious Humans</h4>
							<p>Freelance fullstack web application</p>
						</div>
					</div>
					<div className={`${styles.proj_sm_cont}`}>
						<div className={styles.inside_proj_cont}>
							<Image
								src={curiousHumans}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Curious Humans</h4>
							<p>Freelance fullstack web application</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
