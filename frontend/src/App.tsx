import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { ThemeList } from "./components/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminPanel } from "./pages/admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
					<Route index element={<div className="main_container"><Layout /><ThemeList/></div>}/>
                </Route>
				<Route path="/admin">
					<Route index element={<AdminPanel/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
