"use client";
import * as React from "react";
import styles from "./styles/Door.module.css";
import Link from "next/link";

export default function Door() {
	return (
		<main className={styles.main}>
			<head>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
				</style>
			</head>
			<h1>I welcome you, wanderer!</h1>
			<Link
				href={{
					pathname: "/index/page",
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
				<Link href="/index/Page">E N T E R</Link>
			</h1>
		</main>
	);
}
