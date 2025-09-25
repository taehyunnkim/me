import styles from './SkillCard.module.css';

interface SkillCardProps {
    title: string;
    image: string;
    onClick?: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, image, onClick }) => {
    return (
        <div className={styles.skillCard} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <img src={image} alt={title} />
            <p className={styles.skillTitle}>{title}</p>
        </div>
    );
};

export default SkillCard;
