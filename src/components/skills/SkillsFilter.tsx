import { skills, type Skills , type SkillItem } from '@/data/skills';
import styles from './SkillsFilter.module.css';
import { IoFilterSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import SkillsFilterModal from './SkillsFilterModal';
import SkillsFilterItem from './SkillsFilterItem';

const SkillsFilter: React.FC = () => {
    const [selectedSkills, setSelectedSkills] = useState<Set<SkillItem>>(new Set());
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check URL parameters for pre-selected skill
        const urlParams = new URLSearchParams(window.location.search);
        const skillName = urlParams.get('skill');
        
        if (skillName) {
            // Find the skill in our skills data
            let foundSkill: SkillItem | null = null;
            
            for (const category of Object.values(skills)) {
                const skill = category.find(item => item.name === skillName);
                if (skill) {
                    foundSkill = skill;
                    break;
                }
            }
            
            if (foundSkill) {
                const newSelectedSkills = new Set<SkillItem>();
                newSelectedSkills.add(foundSkill);
                setSelectedSkills(newSelectedSkills);
            }
            
            // Keep the URL parameter for persistence
        }
    }, []);

    const onFilterClick = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const addSkill = (skill: SkillItem) => {
        const newSelectedSkills = new Set(selectedSkills);
        newSelectedSkills.add(skill);
        setSelectedSkills(newSelectedSkills);
    }

    const removeSkill = (skill: SkillItem) => {
        const newSelectedSkills = new Set(selectedSkills);
        newSelectedSkills.delete(skill);
        setSelectedSkills(newSelectedSkills);
    }
    
    
    return (
        <>
            <div className={styles.skillsFilterContainer}>
                <div className={styles.skillsFilterButton} onClick={onFilterClick}>
                    <p>Select skills</p>
                    <IoFilterSharp size={16} color="var(--button-border-gray)" />
                    {isOpen && <SkillsFilterModal onClose={closeModal} removeSkill={removeSkill} addSkill={addSkill} selectedSkills={selectedSkills} />}
                </div>
            </div>
            <div className={styles.skillsFilterItemsContainer}>
                {Array.from(selectedSkills).map((skill) => (
                    <SkillsFilterItem key={skill.name} image={skill.image} title={skill.name} onClick={() => removeSkill(skill)} />
                ))}
            </div>
            
        </>
    )
}


export default SkillsFilter;