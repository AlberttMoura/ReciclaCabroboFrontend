import styles from './dicasLocalizar.module.scss'
import rectangle from '../../img/rectangle.png'
import shapes from '../../img/shapes.png'
import recicla from '../../img/recicla.png'
import localiza from '../../img/localiza.png'
import lld from '../../img/lld.png'
import lle from '../../img/lle.png'


export function DicasLocalizar() {

    return(

        <div className={styles.localizar}>

        <div className={styles.rectangle}>
            <img src={rectangle} alt="Rectangle" />
        </div>

        <div className={styles.shapes}>
            <img src={shapes}alt="Shapes" />
        </div>

        <div className={styles.recicla}>
            <img src={recicla}alt="Recicla" />
        </div>

        <div className={styles.localiza}>
            <img src={localiza} alt="Localiza" />
        </div>

        <div className={styles.lld}>
            <img src={lld} alt="Lado direito" />
        </div>

        <div className={styles.lle}>
            <img src={lle} alt="Lado esquerdo" />
        </div>
 
        </div>
    )
}