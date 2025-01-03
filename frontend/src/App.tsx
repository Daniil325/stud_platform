import { Header } from "./components/header"
import { Layout } from "./components/layout"
import { ThemeList } from "./components/theme"

function App() {
	return (
		<>
			<Header/>
			<div className="main_container">
				<Layout/>
				<ThemeList/>
			</div>
			
		</>
	)
}

export default App
