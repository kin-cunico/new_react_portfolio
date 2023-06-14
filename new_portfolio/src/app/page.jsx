"use client";
import styles from "./styles/Door.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
	//mounting to lazy loading
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);

	function StarsContainer() {
		document.querySelector("#starsContainer");
	}
	return (
		<>
			{mounted && (
				<main className={styles.main}>
					<style>
						@import
						url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
					</style>
					<h1>I WELCOME YOU, WANDERER!</h1>

					<Link
						href="/pages/index"
						className={styles.container}
						id="starsContainer"
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
						<Link href="/pages/index">E N T E R</Link>
					</h1>
				</main>
			)}
		</>
	);
}
