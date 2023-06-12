"use client";
import styles from "./styles/Door.module.css";
import Link from "next/link";
import IndexLoader from "./components/Loader";

export default function Page() {
	return (
		<main className={styles.main}>
			<>{IndexLoader}</>
			<h1>I welcome you, wanderer!</h1>
			<Link
				href={{
					pathname: "/index",
				}}
				className={styles.container}
			>
				<div className={styles.stars}></div>
				<div className={styles.stars2}></div>
				<div className={styles.stars3}></div>
				<div className={styles.stars4}></div>
				<div className={styles.stars5}></div>
				<div className={styles.stars6}></div>
				<div className={styles.stars7}></div>
				<div className={styles.stars8}></div>
				<div className={styles.stars9}></div>
				<div className={styles.stars10}></div>
				<div className={styles.stars11}></div>
				<div className={styles.stars12}></div>
				<div className={styles.stars13}></div>
				<div className={styles.stars14}></div>
				<div className={styles.stars15}></div>
			</Link>
			<h1 className={styles.click_text}>
				<Link href="/Index">E N T E R</Link>
			</h1>
		</main>
	);
}
