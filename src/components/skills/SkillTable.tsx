import styles from './SkillTable.module.css';
import SkillTableItem from './SkillTableItem';
import { skills, type SkillItem } from '@/data/skills';


const SkillTable = () => {
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
                            <SkillTableItem
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

export default SkillTable;
