import styles from "../styles/Footer.module.css";
export default function Footer() {
	return (
		<main className={styles.main}>
			<div className={styles.about_box}>
				<h4>About</h4>
				<div>
					<p>Blog</p>
					<p>Bio</p>
				</div>
			</div>
			<div className={styles.legal_box}>
				<h4>Copyright & Legal</h4>
				<div>
					<p>Certificates</p>
					<p>Terms of Use & Licenses</p>
					<p>
						Developed by: <span>Kin Cunico</span>
					</p>
					<p>
						Developed using <span>React, Next.js, and Typescript</span>
					</p>
				</div>
			</div>
			<div className={styles.contact_box}>
				<h4> Contact & Socials</h4>
				<div>
					<p>Github</p>
					<p>LinkedIn</p>
					<p>Twitter</p>
					<p>TikTok</p>
					<p>contact@kincunico.dev</p>
					<p>WhatsApp</p>
				</div>
			</div>
		</main>
	);
}
