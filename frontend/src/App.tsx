import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { ThemeList } from "./components/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminPanel } from "./pages/admin";
import { PrimeReactProvider } from "primereact/api";
import { TestPage } from "./pages/main/test";

function App() {
    return (
        <BrowserRouter>
            <PrimeReactProvider>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <>
                                <Header/>
                                <div className="main_container">
                                    <Layout />
                                    <ThemeList />
                                </div>
                                </>
                            }
                        />
                        <Route
                            path="/test"
                            element={
                                <>
                                <Header/>
                                <div className="main_container">
                                    <Layout />
                                    <TestPage />
                                </div>
                                </>
                            }
                        />
                    </Route>
                    <Route path="/admin/*" element={<AdminPanel />} />
                </Routes>
            </PrimeReactProvider>
        </BrowserRouter>
    );
}

export default App;
