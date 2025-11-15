// src/app/page.tsx
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
