import styles from './TextButton.module.css';

interface TextButtonProps {
    text: string;
    onClick: () => void;
    ariaLabel?: string;
    icon?: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ text, onClick, ariaLabel, icon }) => { 
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };

    return (
        <button 
            className={styles.textButton} 
            onClick={handleClick} 
            aria-label={ariaLabel}
        >
            {text}
            {icon}
        </button>
    )
}

export default TextButton;