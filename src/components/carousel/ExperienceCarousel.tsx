import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceCarousel.module.css';
import TextButton from '@/components/TextButton';
import { experiences } from '@/data/experiences';


const ExperienceCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    let cardGroups = [];
    for (let i = 0; i < experiences.length; i += 2) {
        cardGroups.push(experiences.slice(i, i + 2));
    }

    const experienceGroups = cardGroups.map((group, index) => {
        return (
            <div key={index} className={styles.carouselGroup}>
                {group.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        )
    })

    const nextExperience = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= cardGroups.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevExperience = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? cardGroups.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.experienceCarousel}>
            <div className={styles.carouselContainer}>                
                <div className={styles.carouselContent}>
                    <div 
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {experienceGroups}
                    </div>
                </div>
            </div>
            
            <div className={styles.carouselButtons}>                     
                <TextButton 
                    text="←"
                    onClick={prevExperience}
                    ariaLabel="Previous experience"
                />
                <TextButton 
                    text="→"
                    onClick={nextExperience}
                    ariaLabel="Next experience"
                />
            </div>
        </div>
    );
};

export default ExperienceCarousel;
