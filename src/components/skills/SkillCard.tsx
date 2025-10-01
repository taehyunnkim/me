import styles from './SkillCard.module.css';

interface SkillCardProps {
    image?: string;
    title: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

const SkillCard = ({ image, title, onClick, icon }: SkillCardProps) => {
    return (
        <div className={`${styles.skillsFilterItem} ${onClick ? styles.clickable : styles.nonClickable}`} onClick={onClick}>
            { image ? <img src={image} alt={title} /> : null }
            <p>{title}</p>
            { icon ?  icon : null }
        </div>
    )
}

export default SkillCard;