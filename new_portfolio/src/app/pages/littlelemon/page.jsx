"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import React from "react";
import LittleLemon from "@/app/components/LittleLemon.jsx";
import Footer from "@/app/components/Footer";
//mounting to lazy loading

const usePage = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);
	return (
		mounted && (
			<>
				<Navbar />
				<LittleLemon />
				<Footer />
			</>
		)
	);
};

export default usePage;
