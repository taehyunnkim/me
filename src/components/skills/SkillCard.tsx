import styles from './SkillCard.module.css';

interface SkillCardProps {
    title: string;
    image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
    return (
        <div className={styles.skillCard}>
            <img src={image} alt={title} />
            <p className={styles.skillTitle}>{title}</p>
        </div>
    );
};

export default SkillCard;
