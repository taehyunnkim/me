import styles from './InfiniteScrollingGallery.module.css';
import { galleryImages } from '@/data/gallery';


const InfiniteScrollingGallery: React.FC = () => {
    return (    
        <div className={styles.infiniteScrollingGallery}>
            <div className={styles.infiniteScrollingGalleryImages}>
                {galleryImages.map((image, index) => (
                    <img 
                        key={index}
                        src={image.src} 
                        alt={image.alt}
                        width={80}
                        loading="lazy"
                    />
                ))}
            </div>
            <div className={styles.infiniteScrollingGalleryImages}>
                {galleryImages.map((image, index) => (
                    <img 
                        key={`duplicate-${index}`}
                        src={image.src} 
                        alt={image.alt} 
                        width={80}
                        loading="lazy"
                        aria-hidden="true" 
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollingGallery;