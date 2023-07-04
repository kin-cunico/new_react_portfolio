import styles from "../styles/Vitrine.module.css";
import Image from "next/image";
import littleLemon from "public/landing_page.jpg";
import Link from "next/link";

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
								src={littleLemon}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>Little Lemon </h2>
							<p>
								Little Lemon Capstone project for the Meta Front-end Developer
								Certificate
							</p>
							<Link
								href="/pages/littlelemon"
								className={styles.boxLink}
							>
								See more
							</Link>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.Img}>
							<Image
								src={littleLemon}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>LifeAbroad</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
								commodo ligula eget dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus.
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.Img}>
							<Image
								src={littleLemon}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>Curious Humans</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
								commodo ligula eget dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
