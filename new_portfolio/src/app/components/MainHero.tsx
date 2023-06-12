import Image from "next/image";
import HeroImage from "src/images/kin.png";
import styles from "../styles/MainHero.module.css";

export default function MainHero() {
	return (
		<div className={styles.main}>
			<Image
				className={styles.heroImg}
				role="logo"
				alt="logo"
				src={HeroImage}
			/>
			<div className={styles.heroText}>
				<h1>React Web Developer</h1>
				<div className={styles.IconList}>
					<a className={styles.Icon}>Github</a>
					<a className={styles.Icon}>LinkedIn</a>
				</div>
				<p>
					Web developer focused on React based applications with Next.js,
					GraphQL, and PostgreSQL.
				</p>
			</div>
		</div>
	);
}
