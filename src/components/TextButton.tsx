import styles from './TextButton.module.css';

interface TextButtonProps {
    text: string;
    onClick: () => void;
    ariaLabel?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ text, onClick, ariaLabel }) => { 
    return (
        <button className={styles.textButton} onClick={onClick} aria-label={ariaLabel}>
            {text}
        </button>
    )
}

export default TextButton;