import Image from "next/image";
import HeroImage from "public/images/kin.png";
import styles from "../styles/MainHero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
	SiTypescript,
	SiPostgresql,
	SiGraphql,
	SiPython,
} from "react-icons/si";

export default function MainHero() {
	return (
		<div className={styles.main}>
			<div className={styles.heroBox}>
				<Image
					className={styles.heroImg}
					role="developer photo"
					alt="developer photo"
					src={HeroImage}
				/>

				<div className={styles.heroText}>
					<h1>
						<span>{`< `}</span>
						{`React`}
						<span>{` / >`}</span>
						{` Web Developer`}
					</h1>
					<div className={styles.IconList}>
						<a
							href="https://github.com/kin-cunico"
							target="_blank"
						>
							<FaGithub className={styles.Icon} />
						</a>
						<a
							href="https://www.linkedin.com/in/kincunicoen/"
							target="_blank"
						>
							<FaLinkedin className={`${styles.Icon}`} />
						</a>
					</div>
					<p>
						My name is Kin. I am a fullstack developer focused on React based
						applications.
					</p>
					<div className={styles.tech_cont}>
						<h4>My tech stack:</h4>
						<div className={styles.techs}>
							<DiJavascript1 className={`${styles.Icon} ${styles.js}`} />
							<SiTypescript className={`${styles.Icon} ${styles.ts}`} />
							<SiPostgresql className={`${styles.Icon} ${styles.postgres}`} />
							<SiGraphql className={`${styles.Icon} ${styles.graphql}`} />
							<SiPython className={`${styles.Icon} ${styles.python}`} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
