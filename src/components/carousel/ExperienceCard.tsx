import styles from './ExperienceCard.module.css';
import type { ExperienceData } from '@/types/experience';

interface ExperienceCardProps {
    experience: ExperienceData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceTitle}>{experience.title}</h3>
                    <span className={styles.experienceDate}>{experience.dateRange}</span>
                </div>
                <div className={styles.experienceDetails}>
                    <span className={styles.experienceCompany}>{experience.company}</span>
                    <span className={styles.experienceLocation}>{experience.location}</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
