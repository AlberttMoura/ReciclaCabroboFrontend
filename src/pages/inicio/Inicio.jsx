import styles from './inicio.module.scss'
import { Link } from 'react-router-dom'

export function Inicio() {
	return (
		<>
			<h1>Início</h1>
			<ul>
				<li>
					<Link to='/'>Inicio</Link>
				</li>
				<li>
					<Link to='/sobre'>Sobre</Link>
				</li>
				<li>
					<Link to='/sdqwodk'>Alguma página que não existe</Link>
				</li>
			</ul>
		</>
	)
}
