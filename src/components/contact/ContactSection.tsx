import styles from './ContactSection.module.css';
import AlbumGrid from '../decorative/AlbumGrid';
import surfBoard from '@/assets/contact/surfboard.png';
import boxingGloves from '@/assets/contact/boxing_gloves.png';

const ContactSection: React.FC = () => {
    return (
        <div className={styles.contactSection}>
            <img
                className={styles.contactImageSurfBoard}
                src={surfBoard.src}
                alt="surf board"
            />
             <img
                className={styles.contactImageBoxing}
                src={boxingGloves.src}
                alt="boxing"
            />
            
            <AlbumGrid 
                className={styles.albumGridDecoration}
            />
            
            <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Let's work together!</h2>
                <p className={styles.contactDescription}>
                    To create software and systems that not only deliver value, 
                    but also protect the people and customers who depend on them!
                </p>
                
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactLabel}>Email</h3>
                        <a 
                            href="mailto:contact@taehyunkim.me" 
                            className={styles.contactLink}
                            aria-label="Send email to TaeHyun Kim"
                        >
                            contact@taehyunkim.me
                        </a>
                    </div>
                    
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactLabel}>LinkedIn</h3>
                        <a 
                            href="https://linkedin.com/in/taehyunnkim" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactLink}
                            aria-label="Visit TaeHyun Kim's LinkedIn profile"
                        >
                            in/taehyunnkim
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
