import styles from './SkillTableItem.module.css';

interface SkillTableItemProps {
    title: string;
    image: string;
    onClick?: () => void;
}

const SkillTableItem: React.FC<SkillTableItemProps> = ({ title, image, onClick }) => {
    return (
        <div className={styles.skillCard} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <img src={image} alt={title} />
            <p className={styles.skillTitle}>{title}</p>
        </div>
    );
};

export default SkillTableItem;
