import todoLogo from '../Assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src={todoLogo} />
                <h1>
                    <span className={styles.headerTo}>to</span>
                    <span className={styles.headerDo}>do</span>
                </h1>
            </div>
        </header >
    )
}