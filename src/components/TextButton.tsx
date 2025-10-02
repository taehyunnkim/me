import styles from './TextButton.module.css';
import { GoLinkExternal } from "react-icons/go";

interface TextButtonProps {
    text: string;
    onClick?: () => void;
    ariaLabel?: string;
    icon?: React.ReactNode;
    href?: string; // For external links
}

const TextButton: React.FC<TextButtonProps> = ({ text, onClick, ariaLabel, icon, href }) => { 
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (href) {
            // Handle external link
            window.open(href, '_blank', 'noopener,noreferrer');
        } else if (onClick) {
            // Handle custom onClick
            onClick();
        }
    };

    return (
        <button 
            className={styles.textButton} 
            onClick={handleClick} 
            aria-label={ariaLabel}
        >
            {text}
            {href ? <GoLinkExternal /> : icon}
        </button>
    )
}

export default TextButton;