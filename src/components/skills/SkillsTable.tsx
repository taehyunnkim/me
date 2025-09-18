import styles from './SkillsTable.module.css';
import SkillCard from './SkillCard';
import { skills } from '@/data/skills';


const SkillsTable = () => {
    return (
        <div className={styles.skillsTable}>
            {skills.map((skill) => (
                <div className={styles.skillsTableGroup}>
                    <h2 className={styles.skillsTableGroupTitle}>{skill.category}</h2>
                    <div className={styles.skillsTableGroupItems}>
                        {skill.items.map((item) => (
                            <SkillCard
                                key={item.name}
                                title={item.name}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsTable;
