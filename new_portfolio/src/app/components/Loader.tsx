import { useState, useEffect } from "react";
const IndexLoader = () => {
	const [domLoaded, setDomLoaded] = useState(false);
	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return <>{domLoaded && null}</>;
};

export default IndexLoader;
