import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Partners.module.scss';
import Icon1 from '../../assets/partners_about/PurinaLogo.svg';
import Icon2 from '../../assets/partners_about/RoyalCanineLogo.svg';

export interface IconProps {
  src: string;
  alt: string;
}

export interface PartnersProps {
  title: string;
  icons: IconProps[];
}

export const PartnersAboutPage: React.FC<PartnersProps> = ({ icons }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.partnersContainer}>
      <h2 className={styles.partnersTitle} data-testid="partners-title">{t('partners.title')}</h2>
      <div className={styles.partnersIconContainer}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.partnersIcon}>
            <img src={icon.src} alt={`Logo ${icon.alt}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const defaultPartnersProps: PartnersProps = {
  title: "Наші партнери",
  icons: [
    { src: Icon1, alt: "Purina" },
    { src: Icon2, alt: "Royal Canine" },
    { src: Icon1, alt: "Purina" },
    { src: Icon2, alt: "Royal Canine" },
    { src: Icon1, alt: "Purina" },
    { src: Icon2, alt: "Royal Canine" }
  ]
};

const Partners: React.FC = () => {

  return <PartnersAboutPage {...defaultPartnersProps} />;
};

export default Partners;