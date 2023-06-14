"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Contact.module.css";
import Navbar from "@/app/components/Navbar";

export default function ContactUs() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "20 characters or less")
				.min(3, "3 characters or more")
				.required("required"),

			email: Yup.string()
				.email()
				.max(40, "40 characters or less")
				.min(4, "4 characters or more")
				.required("required"),
			message: Yup.string()
				.max(600, "600 characters or less")
				.min(20, "20 characters or more")
				.required("required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form
			method="POST"
			action="https://formsubmit.co/4fbffeb79bf315fd896dbdc4cf8c7add"
			className={styles.form}
			target="_blank"
		>
			<Navbar />
			<div className={styles.container}>
				<label className={styles.label}>
					<input
						type="text"
						role="user-name"
						id="name"
						name="name"
						placeholder="Enter your name"
						className={styles.input}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<p className={styles.errors}>{formik.errors.name}</p>
					) : null}
				</label>
				<label className={styles.label}>
					<input
						type="email"
						minLength={4}
						maxLength={40}
						id="email"
						role="user-email"
						name="email"
						required
						placeholder="Enter your email"
						className={styles.input}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<p className={styles.errors}>{formik.errors.email}</p>
					) : null}
				</label>
			</div>
			<div className={styles.inputMessage}>
				<textarea
					id="message"
					name="message"
					role="user-message"
					minLength={20}
					maxLength={600}
					required
					placeholder="Write your query here:"
					className={styles.textArea}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
				/>
				{formik.touched.message && formik.errors.message ? (
					<p className={styles.errors}>{formik.errors.message}</p>
				) : null}
				<button
					type="submit"
					className={styles.submit_btn}
				>
					Submit
				</button>
			</div>
		</form>
	);
}
