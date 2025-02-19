import svgLogo from '../../../public/images/logos/wildberies-text.svg';
import styles from './LogoSvg.module.css';

const LogoSvg = () => {
    return (
        <div className={styles.svgContainer} onClick={() => window.location.reload()}>
            <img src={svgLogo} alt='Logo' className={styles.svgLogo} />
        </div>
    );
};
export default LogoSvg;
