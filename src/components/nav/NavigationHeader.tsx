import React from 'react';
import styles from './NavigationHeader.module.css';
import logo from '@/assets/logo.png';

interface NavigationHeaderProps {
    activePath: string;
    title: string;
};

const NavigationHeader: React.FC<NavigationHeaderProps> = ( { activePath, title } ) => {
    return (
        <nav className={styles.navigationHeader}>
            <div className={styles.navigationHeaderLeft}>
                <img 
                    className={styles.navigationHeaderLogo} 
                    src={logo.src} 
                    alt="logo" 
                    width={40}
                    height={40}
                    loading="eager"
                />
                {title && <h1 className={styles.navigationHeaderTitle}>{title}</h1>}
            </div>
            
            <ul className={styles.navigationHeaderList}>
                <li><a href="/" className={activePath === '/' ? styles.active : ''}>Home</a></li>
                <li><a href="/skills" className={activePath === '/skills' ? styles.active : ''}>Skills & Projects</a></li>
            </ul>
        </nav>
    );
};

export default NavigationHeader;

