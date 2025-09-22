import { skills, type Skills , type SkillItem } from '@/data/skills';
import styles from './SkillsFilter.module.css';
import { FaFilter } from 'react-icons/fa6'
import { useState } from 'react';
import SkillsFilterModal from './SkillsFilterModal';

interface SkillsFilterProps {
    skills: Skills[]
}

const SkillsFilter: React.FC = () => {
    const [selectedSkills, setSelectedSkills] = useState<SkillItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const onFilterClick = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    
    
    return (
        <>
            <div className={styles.skillsFilterContainer}>
                <div className={styles.skillsFilterButton} onClick={onFilterClick}>
                    <p>Select skills</p>
                    <FaFilter />
                    {isOpen && <SkillsFilterModal onClose={closeModal} />}
                </div>
            </div>
            <div className={styles.skillsFilterItemsContainer}>

            </div>
            
        </>
    )
}


export default SkillsFilter;