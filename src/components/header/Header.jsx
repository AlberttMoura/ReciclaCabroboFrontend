import styles from './header.module.scss'
import shapes from '../../img/shapes.png'

export function Header() {
	return (
		<header className={styles.header}>
			
				<img src={shapes}alt="Shapes" />
			
		</header>
	)
}


