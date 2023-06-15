"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import galaga from "public/images/galaga.png";
import { useState, useEffect, useRef } from "react";
import StarsContainer from "../page";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isShot, setIsShot] = useState(false);
	let starsContainer = StarsContainer;
	console.log(starsContainer);
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
		navbarRef.current?.removeEventListener("click", (e) => {
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
	}, [""]);

	return (
		<div
			ref={navbarRef}
			className={styles.navbar}
			id="navbar"
		>
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
						>
							PROJECTS
						</Link>
						<Link
							href="/pages/about"
							className={styles.link}
							onClick={handleClick}
							id="2"
						>
							ABOUT
						</Link>
						<Link
							href="/pages/contact"
							className={styles.link}
							onClick={handleClick}
							id="3"
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
					</div>
				</div>
			</ul>
		</div>
	);
}
