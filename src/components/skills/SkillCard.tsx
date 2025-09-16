import styles from './SkillCard.module.css';

interface SkillCardProps {
    title: string;
    items: string[];
    isEmpty?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items, isEmpty = false }) => {
    if (isEmpty) {
        return <div className={styles.skillCardEmpty}></div>;
    }

    return (
        <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>{title}</h3>
            <div className={styles.skillItems}>
                {items.map((item, index) => (
                    <span key={index} className={styles.skillItem}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
