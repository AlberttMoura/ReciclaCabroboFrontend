import styles from './sobre.module.scss'
import { Link } from 'react-router-dom'

export function Sobre() {
	return (
		<>
			<h1>Sobre</h1>
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
