import styles from './telaLogin.module.scss'
import rectangle from '../../img/rectangle.png'
import shapes from '../../img/shapes.png'
import recicla from '../../img/recicla.png'
import bemVindo from '../../img/bem_vindo.png'
import paraContinuar from '../../img/para_continuar.png'
import campoCpf from '../../img/campo_cpf.png'
import campoSenha from '../../img/campo_senha.png'
import buttonLogin from '../../img/button_login.png'


export function TelaLogin() {
    return(

        <div className={styles.login}> 

        <div className={styles.rectangle}>
            <img src={rectangle} alt="Rectangle" />
        </div>

        <div className={styles.shapes}>
            <img src={shapes}alt="Shapes" />
        </div>

        <div className={styles.recicla}>
            <img src={recicla}alt="Recicla" />
        </div>

        <div className={styles.bemVindo}>
            <img src={bemVindo} alt="Boas Vindas" />
        </div>

        <div className={styles.paraContinuar}>
            <img src={paraContinuar} alt="Login para continuar" />
        </div>

        <div className={styles.campoCpf}>
            <img src={campoCpf} alt="Campo para digitar cpf" />
        </div>

        <div className={styles.campoSenha}>
            <img src={campoSenha} alt="Campo para digitar senha" />
        </div>

        <div className={styles.esqueceuSenha}>
            <p>
            Esqueceu a senha?
            </p>
        </div>

        <div className={styles.buttonLogin}>
            <img src={buttonLogin} alt="Login" />
        </div>

        <div className={styles.cadastro}>
         <div className={styles.texto1}> Não tem uma conta ? </div>
         <div className={styles.texto2}> Cadastre-se </div>
        </div>



        </div>
        
    )
}