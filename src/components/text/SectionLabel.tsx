import styles from './SectionLabel.module.css';

interface SectionLabelProps {
    label: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
    return (
        <strong className={styles.sectionLabel}>{label}</strong>
    )
}

export default SectionLabel;