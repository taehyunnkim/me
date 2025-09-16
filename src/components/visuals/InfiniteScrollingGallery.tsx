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
                {images.map((image) => (
                    <img src={image.src} alt={image.alt} />
                ))}
            </div>
            <div className={styles.infiniteScrollingGalleryImages}>
                {images.map((image) => (
                    <img src={image.src} alt={image.alt} aria-hidden="true" />
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollingGallery;