import LogoSvg from '../LogoSvg/LogoSvg';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            <LogoSvg />
        </div>
    );
};

export default Header;
