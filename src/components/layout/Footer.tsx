import styles from './Footer.module.css';

interface FooterProps {
    buildTime: string;
}

const Footer: React.FC<FooterProps> = ({ buildTime }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>
                    Website was last updated at {buildTime}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
