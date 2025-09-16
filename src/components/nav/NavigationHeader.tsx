import React from 'react';
import styles from './NavigationHeader.module.css';
import logo from '@/assets/logo.png';

interface NavigationHeaderProps {
    activePath: string;
};

const NavigationHeader: React.FC<NavigationHeaderProps> = ( { activePath } ) => {
    return (
        <nav className={styles.navigationHeader}>
            <img 
                className={styles.navigationHeaderLogo} 
                src={logo.src} 
                alt="logo" 
                width={40}
                height={40}
                loading="eager"
            />
            
            <ul className={styles.navigationHeaderList}>
                <li><a href="/" className={activePath === '/' ? styles.active : ''}>Home</a></li>
                <li><a href="/skills" className={activePath === '/skills' ? styles.active : ''}>Skills</a></li>
            </ul>
        </nav>
    );
};

export default NavigationHeader;

