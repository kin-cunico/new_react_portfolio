"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import galaga from "src/images/galaga.png";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isShot, setIsShot] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	const navbarRef = useRef<HTMLDivElement>(null);
	const shotRef = useRef("shot");

	useEffect(() => {
		if (navbarRef && navbarRef.current) {
			navbarRef.current.addEventListener("click", (e) => {
				console.log(e);
				let x = e.pageX;
				let y = e.pageY;
				console.log(x, y);
				let shot = document.createElement("div");
				navbarRef.current?.appendChild(shot);
				shot.className = `${styles.shot}`;
				shot.style.left = `${x - 5}px`;
				shot.style.top = `${y - 5}px`;
			});
		}
		navbarRef.current?.removeEventListener("click", (e) => {});
	}, [""]);

	return (
		<div
			ref={navbarRef}
			className={styles.navbar}
			id="navbar"
		>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
			</style>
			<h1>
				<span>Kin</span> Cunico
			</h1>
			<ul className={styles.right_nav}>
				<div className={styles.wrapper}>
					<div className={styles.link_wrapper}>
						<Link
							href="/pages/index"
							className={styles.link}
							onClick={handleClick}
							id="0"
						>
							HOME
						</Link>
						<Link
							href="/pages/projects"
							className={styles.link}
							onClick={handleClick}
							id="1"
							target="_blank"
						>
							PROJECTS
						</Link>
						<Link
							href="/pages/about"
							className={styles.link}
							onClick={handleClick}
							id="2"
							target="_blank"
						>
							ABOUT
						</Link>
						<Link
							href="/pages/contact"
							className={styles.link}
							onClick={handleClick}
							id="3"
							target="_blank"
						>
							CONTACT
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
