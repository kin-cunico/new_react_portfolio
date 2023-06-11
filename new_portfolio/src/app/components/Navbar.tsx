import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import logo from "src/images/kin-cunico.png";
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Image
				className={styles.logo}
				role="logo"
				alt="logo"
				src={logo}
				width={50}
				height={25}
			/>
			<ul>
				<Link
					href="/"
					className={styles.link}
				>
					Home
				</Link>
				<Link
					href="/projects"
					className={styles.link}
				>
					Projects
				</Link>
				<Link
					href="/About"
					className={styles.link}
				>
					About
				</Link>
				<Link
					href="/Contact"
					className={styles.link}
				>
					Contact
				</Link>
			</ul>
		</div>
	);
}
