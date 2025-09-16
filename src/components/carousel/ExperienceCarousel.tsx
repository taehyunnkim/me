import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceCarousel.module.css';
import type { ExperienceData } from '@/types/experience';
import TextButton from '@/components/TextButton';

const experiences: ExperienceData[] = [
    {
        title: 'Software Engineer',
        company: 'Salesforce, Inc',
        dateRange: 'Jul 2024 - Present',
        location: 'Bellevue, WA'
    },
    {
        title: 'DevSecOps Engineer',
        company: 'Boeing',
        dateRange: 'Jan 2024 - Jun 2024',
        location: 'Seattle, WA'
    },
    {
        title: 'Workday Security Analyst',
        company: 'UW - IT',
        dateRange: 'Dec 2023 - May 2024',
        location: 'Seattle, WA'
    },
    {
        title: 'Database & Modeling TA',
        company: 'University of Washington',
        dateRange: 'Sep 2023 - Dec 2024',
        location: 'Seattle, WA'
    },
    {
        title: 'Systems Engineer Intern',
        company: 'Salesforce, Inc',
        dateRange: 'Jun 2023 - Sep 2023',
        location: 'Seattle, WA'
    },
    {
        title: 'Networking & Distributed Systems TA',
        company: 'University of Washington',
        dateRange: 'Mar 2023 - Jun 2023',
        location: 'Seattle, WA'
    },
    {
        title: 'Information Security Specialist',
        company: 'Republic of Korea Navy',
        dateRange: 'Oct 2020 - Jun 2022',
        location: 'South Korea'
    }
];

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
