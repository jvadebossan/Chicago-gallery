import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Artwork from "./pages/Artwork";
import SearchRes from "./pages/SearchRes";
import Favorited from "./pages/Favorited";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/artwork/:id" element={<Artwork />} />
				<Route path="/search/:query" element={<SearchRes />} />
				<Route path="/favorited" element={<Favorited />} />
				<Route path="/erro/:type" element={<Error />} />
				<Route path="*" element={<Error/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;