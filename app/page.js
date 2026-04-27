import Hero from '@/components/home/Hero';
import TheProcess from '@/components/home/TheProcess';

export const metadata = {
  title: 'WearMeOut — Premium Custom T-Shirt Printing',
  description: 'Bold, custom-printed T-shirts made for those who wear their identity. High-voltage streetwear printing with premium inks.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheProcess />
      {/* FeaturedProducts and WhyUs sections to be added next */}
    </>
  );
}
