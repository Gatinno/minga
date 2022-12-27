import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterService from './services/routes'
function App() {
	return (
		<BrowserRouter>
			<RouterService />
		</BrowserRouter>
	);
}

export default App;
