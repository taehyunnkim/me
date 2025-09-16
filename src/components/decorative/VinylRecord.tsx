import styles from './VinylRecord.module.css';

interface VinylRecordProps {
    src: string;
    alt: string;
    className?: string;
}

const VinylRecord: React.FC<VinylRecordProps> = ({ 
    src,
    alt,
    className = ''
}) => {
    return (
        <div className={`${styles.albumCover} ${className}`}>
            <img 
                src={src}
                alt={alt}
                className={styles.albumImage}
                loading="lazy"
            />
            <div className={styles.albumHolder}></div>
        </div>
    );
};

export default VinylRecord;
