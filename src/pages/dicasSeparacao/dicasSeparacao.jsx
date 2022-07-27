import styles from './dicasSeparacao.module.scss'
import rectangle from '../../img/rectangle.png'
import shapes from '../../img/shapes.png'
import recicla from '../../img/recicla.png'
import residuos from '../../img/residuos.png'
import ld from '../../img/ld.png'
import lixo from '../../img/lixo.png'
import slide1 from '../../img/slide1.png'
import slide2 from '../../img/slide2.png'
import slide3 from '../../img/slide2.png'
import slide4 from '../../img/slide2.png'
import { Link } from 'react-router-dom'





export function DicasSeparacao() {

    return(
        
        <div className={styles.separacao}>

        <div className={styles.rectangle}>
            <img src={rectangle} alt="Rectangle" />
        </div>

        <div className={styles.shapes}>
            <img src={shapes}alt="Shapes" />
        </div>

        <div className={styles.recicla}>
            <img src={recicla}alt="Recicla" />
        </div>

        <div className={styles.residuos}>
            <img src={residuos} alt="Residuos" />
        </div>

        <div className={styles.lixo}>
            <img src={lixo} alt="Lixo" />
        </div>

        <div className={styles.ld}>
           <img src={ld} alt="Ld" />
        </div>

        

        <div className={styles.buttons}>

          <button className={styles.slide1}> <img src={slide1} alt="Dicas de Separacao" /> </button>

          <a href="DicasLocalizar">
          <button className={styles.slide2}> <img src={slide2} alt="Dicas de Localizacao" /> </button>
          </a>

          <button className={styles.slide3}> <img src={slide3} alt="" /> </button>

          <button className={styles.slide4}> <img src={slide4} alt="" /> </button>
         

        <div className={styles.navigation_auto}>
          <div className={styles.auto_btn1}></div>
          <div className={styles.auto_btn2}></div>
          <div className={styles.auto_btn3}></div>
          <div className={styles.auto_btn4}></div>
        </div>

        </div>
          
          
          <div className={styles.manual_navigation}>
          <label htmlFor="radio1" className={styles.manual_btn}></label>
          <label htmlFor="radio2" className={styles.manual_btn}></label>
          <label htmlFor="radio3" className={styles.manual_btn}></label>
          <label htmlFor="radio4" className={styles.manual_btn}></label>

        </div>

        

        <nav className={styles.pular}>
          <a href="TelaLogin">
          <p>Pular</p>
          </a>
        </nav>

        
    

        
       

        
        
        
        


        </div>
    )
}