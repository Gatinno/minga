import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, Comics, Details } from "../views";

const RouterService = () => {
  const [title, setTitle] = useState('')
  const [buttons, setButtons] = useState(false)
	return (
		<Routes>
			<Route element={<Layout title={title} buttons={buttons} />}>
				<Route path='/' element={<Home setTitle={setTitle} setButtons={setButtons} />} />
				<Route path='comics' element={<Comics />} />
				<Route path='details/:id' element={<Details />} />
			</Route>
		</Routes>
	);
};
export default RouterService;
