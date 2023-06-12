"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import logo from "src/images/kin-cunico.png";
import galaga from "src/images/galaga.png";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		isOpen ? setIsOpen(!isOpen) : null;
	};

	const naveMove = () => {
		isOpen === true ? "move" : "null";
	};
	const activeLink = () => {
		document.getElementById("#0");
	};

	return (
		<div className={styles.navbar}>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
			</style>
			<h1>Kin Cunico</h1>
			<ul className={styles.right_nav}>
				<div className={styles.wrapper}>
					<div className={styles.link_wrapper}>
						<Link
							href="/pages"
							className={styles.link}
							onClick={handleClick}
							id="0"
						>
							Home
						</Link>
						<Link
							href="/pages/projects"
							className={styles.link}
							onClick={handleClick}
							id="1"
						>
							Projects
						</Link>
						<Link
							href="/pages"
							className={styles.link}
							onClick={handleClick}
							id="2"
						>
							About
						</Link>
						<Link
							href="/pages"
							className={styles.link}
							onClick={handleClick}
							id="3"
						>
							Contact
						</Link>
					</div>
					<div className={styles.galaga_wrapper}>
						<Image
							src={galaga}
							alt="Galaga Ship - Galaga Animated Gif Transparent@pngkey.com"
							width={30}
							height={30}
							className={`${styles.nav_icon}, ${styles.move}`}
							id={`${styles.nav_icon}`}
						></Image>
					</div>
				</div>
			</ul>
		</div>
	);
}
