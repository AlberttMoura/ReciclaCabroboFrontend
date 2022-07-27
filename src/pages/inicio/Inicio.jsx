import styles from './inicio.module.scss'
import { Link } from 'react-router-dom'
import recicla from '../../img/recicla.png'
import tela from '../../img/tela_inicial.png'
import button from '../../img/button.png'
import shapes from '../../img/shapes.png'



export function Inicio() {
	return (
		<div >
			
		<div className={styles.shapes}>
          <img src={shapes} alt="Shapes" />
        </div>

		<div  className={styles.inicio}>
		
		  <img  src={recicla} alt="Recicla" />
		  
		</div>

		<div className={styles.telaInicial}>
		<img  src={tela}alt="Tela inicial" />
		</div>

		<p className={styles.textoUm}> 
		  <strong> Gerencie seus resíduos de forma eficiente</strong>
		  </p>

        <div>
		<p className={styles.textoDois} style={{paddingTop: '18'}}>
			É um projeto para coleta e reciclagem de 
			resíduos na rede de ensino do município e 
			comunidade, buscando garantir a melhoria 
			da qualidade de vida e uma solução 
			consciente para o destino correto do lixo,  
			fomentando uma educação 
			empreendedora.</p>
		</div>
		
		
		<nav className={styles.button}>
		 <a href="DicasSeparacao">
		 < img src={button} alt="Botão"  />
		 </a>
		 
		</nav>
		
		</div>
		
	)
}
