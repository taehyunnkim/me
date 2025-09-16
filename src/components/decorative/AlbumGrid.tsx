import VinylRecord from './VinylRecord';
import styles from './AlbumGrid.module.css';

import moonSafari from '@/assets/contact/moon_safari.jpg';
import sault11 from '@/assets/contact/sault_11.jpeg';
import voodoo from '@/assets/contact/voodoo.jpg';
import bahamadiaKollage from '@/assets/contact/bahamadia_kollage.jpg';
import tommisch from '@/assets/contact/tom_beattape1.jpeg';
import kaytra from '@/assets/contact/kaytra_99.jpeg';

interface Album {
    src: string;
    alt: string;
}

interface AlbumGridProps {
    className?: string;
}


const favoriteAlbums: Album[] = [
    {
        src: moonSafari.src,
        alt: 'Album 1'
    },
    {
        src: sault11.src,
        alt: 'Album 2'
    },
    {
        src: voodoo.src,
        alt: 'Album 3'
    },
    {
        src: bahamadiaKollage.src,
        alt: 'Album 4'
    },
    {
        src: tommisch.src,
        alt: 'Album 5'
    },
    {
        src: kaytra.src,
        alt: 'Album 6'
    }
];

const AlbumGrid: React.FC<AlbumGridProps> = ({ className = '' }) => {
    return (
        <div className={`${styles.albumGrid} ${className}`}>
            {favoriteAlbums.map((album, index) => (
                <VinylRecord
                    key={index}
                    src={album.src}
                    alt={album.alt}
                />
            ))}
        </div>
    );
};

export default AlbumGrid;
