import Image from "next/image";
import HeroImage from "public/kin.png";
import styles from "../styles/MainHero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
	SiJavascript,
	SiTypescript,
	SiPostgresql,
	SiGraphql,
	SiPython,
	SiRedux,
	SiReact,
	SiTailwindcss,
	SiMongodb,
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
							<div className={styles.iconBox}>
								<SiJavascript
									name="javascript"
									className={`${styles.Icon} ${styles.js}`}
								/>
								<label htmlFor="javascript">Javascript</label>
							</div>
							<div className={styles.iconBox}>
								<SiReact
									className={`${styles.Icon} `}
									name="react"
								/>
								<label htmlFor="react">React</label>
							</div>
							<div className={styles.iconBox}>
								<SiTypescript
									name="ts"
									className={`${styles.Icon} ${styles.ts}`}
								/>
								<label htmlFor="ts">Typescript</label>
							</div>
							<div className={styles.iconBox}>
								<SiRedux
									name="redux"
									className={` ${styles.Icon} ${styles.redux} `}
								/>
								<label htmlFor="redux">Redux</label>
							</div>
							<div className={styles.iconBox}>
								<SiTailwindcss
									className={`${styles.Icon} ${styles.tailwind}`}
									name="tailwind"
								/>
								<label htmlFor="tailwind">TailwindCSS</label>
							</div>
							<div className={styles.iconBox}>
								<SiPostgresql
									name="postgres"
									className={`${styles.Icon} ${styles.postgres}`}
								/>
								<label htmlFor="postgress">PostgreSQL</label>
							</div>
							<div className={styles.iconBox}>
								<SiGraphql
									className={`${styles.Icon} ${styles.graphql}`}
									name="GraphQL"
								/>
								<label htmlFor="GraphQL">GraphQL</label>
							</div>
							<div className={styles.iconBox}>
								<SiMongodb
									name="mongodb"
									className={`${styles.Icon} ${styles.mongodb}`}
								/>
								<label htmlFor="mongodb">MongoDB</label>
							</div>
							<div className={styles.iconBox}>
								<SiPython
									name="python"
									className={`${styles.Icon} ${styles.python}`}
								/>
								<label htmlFor="python">Python</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
