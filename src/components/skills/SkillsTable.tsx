import styles from './SkillsTable.module.css';
import SkillCard from './SkillCard';
import { skills, type SkillItem } from '@/data/skills';


const SkillsTable = () => {
    const handleSkillClick = (skill: SkillItem) => {
        // Navigate to skills page with the selected skill name
        window.location.href = `/skills?skill=${encodeURIComponent(skill.name)}`;
    };
    return (
        <div className={styles.skillsTable}>
            {Object.keys(skills).map((skill) => (
                <div key={skill} className={styles.skillsTableGroup}>
                    <h2 className={styles.skillsTableGroupTitle}>{skill}</h2>
                    <div className={styles.skillsTableGroupItems}>
                        {skills[skill].map((item) => (
                            <SkillCard
                                key={item.name}
                                title={item.name}
                                image={item.image}
                                onClick={() => handleSkillClick(item)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsTable;
