import styles from './SkillCard.module.css';
import { skills } from '@/data/skills';

interface SkillCardProps {
    title: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

const SkillCard = ({ title, onClick, icon }: SkillCardProps) => {
    // Find the skill data by name across all categories
    const findSkillByName = (skillName: string) => {
        for (const category in skills) {
            const skill = skills[category].find(s => s.name === skillName);
            if (skill) return skill;
        }
        return null;
    };

    const skillData = findSkillByName(title);

    return (
        <div className={`${styles.skillsFilterItem} ${onClick ? styles.clickable : styles.nonClickable}`} onClick={onClick}>
            {skillData?.image && <img src={skillData.image} alt={title} />}
            <p>{title}</p>
            {icon && icon}
        </div>
    )
}

export default SkillCard;