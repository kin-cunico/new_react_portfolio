import styles from "../styles/Footer.module.css";
export default function Footer() {
	return (
		<main className={styles.main}>
			<section className={styles.footer_sec}>
				<div className={styles.contact_box}>
					<h4> Contact & Socials</h4>
					<div>
						<a>
							<p>Github</p>
						</a>
						<a>
							<p>LinkedIn</p>
						</a>
						<a>
							<p>TikTok</p>
						</a>
						<a>
							<p>WhatsApp</p>
						</a>

						<a>
							<p> email: contact@kincunico.dev</p>
						</a>
					</div>
				</div>
				<div className={styles.about_box}>
					<h4>About</h4>
					<div>
						<a>
							<p>Blog</p>
						</a>
						<a>
							<p>Biography</p>
						</a>
						<a>
							<p>Partners</p>
						</a>
					</div>
				</div>
				<div className={styles.legal_box}>
					<h4>Copyright & Legal</h4>
					<div>
						<a>
							<p>Certificates</p>
						</a>

						<a>
							<p>Terms of Use & Licenses</p>
						</a>

						<a>
							<p>
								Developed by: <span>Kin Cunico</span>
								<a></a>
							</p>
						</a>

						<a>
							<p>
								Developed using <span>React, Next.js, and Typescript</span>
							</p>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
