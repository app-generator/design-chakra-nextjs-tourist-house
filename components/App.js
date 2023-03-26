import React from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
	return (
		<Box w='full'>
			<Header />
			<Main />
			<Footer />
		</Box>
	);
};

export default App;
