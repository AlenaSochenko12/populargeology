import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { SliderButton } from '../Buttons/SliderButton';

const Accordion = ({ items }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (key) => {
        setOpenSection((prevKey) => (prevKey === key ? null : key));
    };

    return (
        <div className={styles.accordionWrapper}>
            <div className={styles.buttonRow}>
                {items.map((item) => (
                    <SliderButton
                        key={item.key}
                        className={styles.accordionButton}
                        onClick={() => toggleSection(item.key)}
                    >
                        {item.title}
                    </SliderButton>
                ))}
            </div>

            {items.map((item) => (
                <div
                    key={item.key}
                    className={`${styles.accordionContent} ${
                        openSection === item.key ? styles.open : ''
                    }`}
                >
                    {openSection === item.key && item.content}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
