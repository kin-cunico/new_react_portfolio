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
	const [page, setPage] = useState("");

	useEffect(() => {
		if (page === "") {
			setPage(
				<main className={styles.main}>
					<h2 role="heading">Little Lemon London website</h2>

					<div
						className={styles.container}
						role="banner"
					>
						<iframe
							role="img"
							className={styles.iframe}
							src="https://online.fliphtml5.com/paeaw/otda/"
							seamless="seamless"
							frameborder="0"
							allowtransparency="true"
							allowfullscreen="true"
						></iframe>
					</div>
				</main>
			);
		}
	}, [page]);

	return <>{mounted && page}</>;
};

export default LittleLemon;
