import styles from './telaSuperior.module.scss'
import rectangle from '../../img/rectangle.png'
import shapes from '../../img/shapes.png'
import recicla from '../../img/recicla.png'
import residuos from '../../img/residuos.png'
import lixo from '../../img/lixo.png'
import um from '../../img/um.png'
import pular from '../../img/pular.png'








export function TelaSuperior() {

    return(
        
        <div className={styles.telaSuperior}>

        

        <div className={styles.shapes}>
           <img src={shapes} alt="Shapes" />
        </div> 

        <div className={styles.recicla}>
           <img src={recicla} alt="Recicla" />
        </div>

        <div className={styles.residuos}>
           <img src={residuos} alt="Resíduos" />
        </div>

        <div className={styles.rectangle}>
           <img src={rectangle}alt="Rectangle" />
        </div>


        <div className={styles.lixo}>
          <img src={lixo} alt="Lixo" />
        </div>

        <div className={styles.um}>
            <img src={um} alt="Um" />
        </div>

        <nav className={styles.pular}>
            <img src={pular} alt="Pular" />
        </nav>

        


        
             
        

        

        

       

       

    </div> 

   

   
    
    )
}