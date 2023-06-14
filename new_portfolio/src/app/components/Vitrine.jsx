import styles from "../styles/Vitrine.module.css";
import Image from "next/image";
import cruzeiro from "src/images/cruzeiro.png";

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
								src={cruzeiro}
								id="img"
								alt="card 1 image"
							/>
						</div>
						<div className={styles.content}>
							<h2>Data Structured </h2>
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
								src={cruzeiro}
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
								src={cruzeiro}
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
