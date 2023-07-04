"use client";

import { useState, useEffect } from "react";
import styles from "../styles/ProjectsPdf.module.css";

const LittleLemon = () => {
	//mounting to lazy loading
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);
	return (
		<>
			<main className={styles.main}>
				<h2 role="heading">Curious Humans Website</h2>

				<div
					className={styles.container}
					role="banner"
				>
					<iframe
						role="img"
						className={styles.iframe}
						src="/curioushumans"
						seamless="seamless"
						frameborder="0"
						allowtransparency="true"
						allowfullscreen="true"
					></iframe>
				</div>
			</main>
		</>
	);
};

export default LittleLemon;
