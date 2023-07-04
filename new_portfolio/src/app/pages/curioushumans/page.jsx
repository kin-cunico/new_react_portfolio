import Navbar from "@/app/components/Navbar";
import React from "react";
import Curious_Humans from "@/app/components/Curious_Humans.jsx";
import Footer from "@/app/components/Footer";

const page = () => {
	return (
		<>
			<Navbar />
			<Curious_Humans />
			<Footer />
		</>
	);
};

export default page;
