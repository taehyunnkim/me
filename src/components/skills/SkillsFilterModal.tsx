import styles from './SkillsFilterModal.module.css';
import { skills, type SkillItem } from '@/data/skills';
import SectionLabel from '@/components/text/SectionLabel';
import SkillCard from '@/components/skills/SkillCard';
import { useState, useEffect, useRef } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { PiCircleDashedLight } from "react-icons/pi";


interface SkillsFilterModalProps {
    onClose: () => void;
    removeSkill: (skill: SkillItem) => void;
    addSkill: (skill: SkillItem) => void;
    selectedSkills: Set<SkillItem>;
}

const SkillsFilterModal: React.FC<SkillsFilterModalProps> = ({ onClose, removeSkill, addSkill, selectedSkills }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Languages");
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    }

    const handleItemClick = (item: SkillItem) => {
        if (selectedSkills.has(item)) {
            removeSkill(item);
        } else {
            addSkill(item);
        }
    }

    return (
        <div className={styles.skillsFilterModal} ref={modalRef}>
            <div className={styles.skillCategories}>
                <SectionLabel label="Categories" />
                <div className={styles.skillCategoryItems}>
                    {Object.keys(skills).map((category) => (
                        <div 
                            className={`${styles.skillCategory} ${selectedCategory === category ? styles.skillCategorySelected : ''}`} 
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <p>{category}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.skillItems}>
                <SectionLabel label="Skills" />
                <div className={styles.skillItemsContainer}>
                    {skills[selectedCategory].map((item: SkillItem) => {
                        return <SkillCard
                            key={item.name}
                            title={item.name} 
                            icon={selectedSkills.has(item) ? <FaCircleCheck className={styles.skillItemCheck}/> : <PiCircleDashedLight className={styles.skillItemCheckEmpty} />}
                            onClick={() => {handleItemClick(item)}}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillsFilterModal;