import styles from './ProjectCard.module.css';
import type { Project } from '@/types/project';
import { useState } from 'react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [imageError, setImageError] = useState(false);
    const displaySkills = project.skills.slice(0, 3);
    const hasMoreSkills = project.skills.length > 3;

    const handleClick = () => {
        window.location.href = `/project/${project.id}`;
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const getPlaceholderColor = (title: string) => {
        const colors = [
            '#4f62d9',
            '#cc59c5',
            '#ff639c'
        ];
        
        return colors[Math.abs(title.length) % colors.length];
    };

    return (
        <div className={styles.projectCard} onClick={handleClick}>
            <div className={styles.projectThumbnail}>
                {project.thumbnail && !imageError ? (
                    <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        onError={handleImageError}
                    />
                ) : (
                    <div 
                        className={styles.placeholderThumbnail}
                        style={{ backgroundColor: getPlaceholderColor(project.title) }}
                    >
                        <span className={styles.placeholderText}>
                            {project.title}
                        </span>
                    </div>
                )}
            </div>
            <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectTags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={`${styles.projectTag} ${styles[tag]}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
                <div className={styles.projectSkills}>
                    {displaySkills.map((skill) => (
                        <span key={skill} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                    {hasMoreSkills && (
                        <span className={styles.moreSkills}>
                            +{project.skills.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
