import styles from './SkillsFilterModal.module.css';
import { skills, type SkillItem } from '@/data/skills';
import SectionLabel from '@/components/text/SectionLabel';
import { useState, useEffect, useRef } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { PiCircleDashedLight } from "react-icons/pi";


interface SkillsFilterModalProps {
    onClose: () => void;
}

const SkillsFilterModal: React.FC<SkillsFilterModalProps> = ({ onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Languages");
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
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

    const handleItemClick = (item: string) => {
        const newSelectedItems = new Set(selectedItems);
        
        if (newSelectedItems.has(item)) {
            newSelectedItems.delete(item);
        } else {
            newSelectedItems.add(item);
        }

        setSelectedItems(newSelectedItems);
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
                        const isSelected = selectedItems.has(item.name);
                        return (
                            <div 
                                key={item.name}
                                className={`${styles.skillItem} ${isSelected ? styles.skillItemSelected : ''}`} 
                                onClick={() => handleItemClick(item.name)}
                            >
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                {isSelected ? <FaCircleCheck className={styles.skillItemCheck} /> : <PiCircleDashedLight className={styles.skillItemCheckEmpty} />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillsFilterModal;