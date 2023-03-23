import React from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import CenterComponent from "./CenterComponent";
import Footer from "./Footer";

const App = () => {
	return (
		<Box maxWidth='1280px'>
			<Header />
			<CenterComponent />
			<Footer />
		</Box>
	);
};

export default App;
4;
