import styles from './SkillsFilterItem.module.css';
import { FaXmark } from 'react-icons/fa6';


interface SkillsFilterItemProps {
    image: string;
    title: string;
    onClick: () => void;
}

const SkillsFilterItem = ({ image, title, onClick }: SkillsFilterItemProps) => {
    return (
        <div className={styles.skillsFilterItem} onClick={onClick}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <FaXmark className={styles.skillsFilterItemX} />
        </div>
    )
}

export default SkillsFilterItem;