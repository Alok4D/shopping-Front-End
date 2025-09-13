import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DeliverySection from './DeliverySection';
import TeamMate from './TeamMate';
import ClientTestimonial from './ClientTestimonial';
import NewsletterSubscribe from '../../Component/NewsletterSubscribe ';

const About = () => {
    return (
      <>
        <HeroSection></HeroSection>
        <FeaturesSection></FeaturesSection>
        <DeliverySection></DeliverySection>
        <TeamMate></TeamMate>
        <ClientTestimonial></ClientTestimonial>
        <NewsletterSubscribe></NewsletterSubscribe>
      </>
    );
};

export default About;