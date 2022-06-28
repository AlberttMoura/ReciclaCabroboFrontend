import styles from './app.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/inicio/Inicio'
import { Sobre } from './pages/sobre/Sobre'
import { PaginaNaoEncontrada } from './pages/paginaNaoEncontrada/PaginaNaoEncontrada'
import { Header } from './components/header/Header'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Inicio />} />
				<Route path='/sobre' element={<Sobre />} />
				<Route path='*' element={<PaginaNaoEncontrada />} />
			</Routes>
		</>
	)
}

export default App
