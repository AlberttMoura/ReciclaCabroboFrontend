import styles from './app.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/inicio/Inicio'
import {TelaSuperior} from './components/telaSuperior/TelaSuperior'
import { DicasSeparacao } from './pages/dicasSeparacao/dicasSeparacao'
import { DicasLocalizar } from './pages/dicasLocalizar/DicasLocalizar'
import {TelaLogin} from './pages/telaLogin/telaLogin'



function App() {
	return (
		<>
			
			<Routes>
				<Route path='/' element={<Inicio />} />

                <Route path='/DicasSeparacao' element={<DicasSeparacao />} />

				<Route path='/DicasLocalizar' element={<DicasLocalizar />} />

				<Route path='/DicasSeparacao' element={<DicasSeparacao />} />

				<Route path='/TelaLogin' element={<TelaLogin />} />




				
				
			</Routes>
		</>
	)
}

export default App
