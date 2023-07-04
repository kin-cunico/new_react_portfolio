import styles from "src/app/styles/SubHero.module.css";
import Navbar from "../../components/Navbar";
import curiousHumans from "public/cruzeiro.png";
import GymWebsite from "public/Orange Sky.png";
import LitteLemon from "public/landing_page.jpg";
import Psy from "public/Tree of Hope.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function SubHero() {
	return (
		<main
			className={styles.main}
			id="projects"
		>
			<Navbar />
			<div className={styles.projects_out_container}>
				<h1>Projects</h1>
				<div className={styles.projects_container}>
					<div className={`${styles.proj_sm_cont}`}>
						<Link
							className={styles.inside_proj_cont}
							href="http://localhost:3000/pages/curioushumans"
							target="_blank"
						>
							<Image
								src={curiousHumans}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Curious Humans</h4>
							<p>
								Undergoing freelance project that aims to share educational
								events across the UK.
							</p>
						</Link>
					</div>
					<Link
						className={`${styles.proj_sm_cont}`}
						href="/"
						target="_blank"
					>
						<div className={styles.inside_proj_cont}>
							<Image
								src={GymWebsite}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Gym SPApp</h4>
							<p>WebApp using Typescript</p>
						</div>
					</Link>
					<Link
						href="http://localhost:3000/pages/littlelemon"
						target="_blank"
						className={`${styles.proj_sm_cont}`}
					>
						<div className={styles.inside_proj_cont}>
							<Image
								src={LitteLemon}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>Little Lemon </h4>
							<p>
								Capstone project for the Meta Front-end Developer Certificate
							</p>
						</div>
					</Link>
					<Link
						href="/"
						target="_blank"
						className={`${styles.proj_sm_cont}`}
					>
						<div className={styles.inside_proj_cont}>
							<Image
								src={Psy}
								alt="curious humans project"
								className={styles.images_cont}
							/>
							<h4>PsyCare</h4>
							<p>
								Freelance fullstack web application that connects Psychologists
								directly to patients.
							</p>
						</div>
					</Link>
				</div>
			</div>
			<Footer />
		</main>
	);
}
