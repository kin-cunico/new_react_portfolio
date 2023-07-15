import styles from "../styles/Vitrine.module.css";
import Image from "next/image";
import littleLemon from "public/landing_page.jpg";
import Link from "next/link";
import luminaeWikia from "public/luminaewikia.jpg";
import curiousHumans from "public/high-fid-logged-black-v2.png";
import evoGym from "public/evogym.jpg";

export default function Vitrine() {
	return (
		<main className={styles.main}>
			<a
				id="vitrine"
				href="#vitrine"
			>
				VITRINE
			</a>
			<div className={styles.container}>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.Img}>
							<Image
								src={evoGym}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>EvoGym </h2>
							<p>Project created for a mockup gym in Portuguese.</p>
							<Link
								href="https://gym-typescript-82j.pages.dev/"
								target="_blank"
							>
								<button className={styles.seeLiveButton}>SEE LIVE</button>
							</Link>
							<h4>
								Technologies used:{" "}
								<span>
									React, Typescript, Framer-motion, TailwindCSS, and Vite.
								</span>
							</h4>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.Img}>
							<Image
								src={curiousHumans}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>Curious Humans</h2>
							<p>
								Freelance project created in collaboration with a teacher from
								Scotland. This project aims at shortening the gap between
								students and educational events around the UK.
							</p>
							<Link
								href="https://www.figma.com/file/Y76XVXmAAkHT4yFfgI0xIE/Curious-Humans?type=design&node-id=0%3A1&mode=design&t=AfIk1xIT6o7wPLAG-1"
								target="_blank"
							>
								<button className={styles.seeLiveButton}>See Figma</button>
							</Link>
							<h4>
								Technologies used:{" "}
								<span>
									React, Next.js, GraphQL, TailwindCSS, Typescript, and
									PostgreSQL.
								</span>
							</h4>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.Img}>
							<Image
								src={luminaeWikia}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>Luminae Wikia</h2>
							<p>
								This project aimed at showing the use of GraphQL requests with
								different data. The images and text were generated using
								Midjourney and ChatGPT4.
							</p>

							<Link
								href="https://luminaewikia.vercel.app/"
								target="_blank"
							>
								<button className={styles.seeLiveButton}>SEE LIVE</button>
							</Link>
							<h4>
								Technologies used:{" "}
								<span>React, Next.js, GraphQL, Formik, and Yup.</span>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
