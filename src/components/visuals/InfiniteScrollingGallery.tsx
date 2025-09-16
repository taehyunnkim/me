import styles from './InfiniteScrollingGallery.module.css';

type InfiniteScrollingImages = { 
    src: string; 
    alt: string;
}[];


const images: InfiniteScrollingImages = [
        {
            src: '/experiences/salesforce.png',
            alt: 'Salesforce, Inc.'
        },
        
        {
            src: '/experiences/boeing.png',
            alt: 'Boeing'
        },
        {
            src: '/experiences/uw.png',
            alt: 'University of Washington'
        },
        {
            src: '/experiences/rokn.png',
            alt: 'Republic of Korea Navy'
        },       
];

const InfiniteScrollingGallery: React.FC = () => {
    return (    
        <div className={styles.infiniteScrollingGallery}>
            <div className={styles.infiniteScrollingGalleryImages}>
                {images.map((image, index) => (
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
                {images.map((image, index) => (
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