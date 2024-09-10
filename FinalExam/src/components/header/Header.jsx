import { ALT, LOGO, TOURNAMENT } from '../../common/tournament';
import styles from './Header.module.css';

function Header() {
    return(
        <header>
            <div className={styles.header}>
                <div>
                    <img src={LOGO} alt={ALT} className={styles.logo} />
                </div>

                <h2>
                    {TOURNAMENT}
                </h2>
            </div>
        </header>
    );
}

export default Header;
