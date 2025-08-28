"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import ButtonHoverBubble from '@/components/buttons/ButtonHoverBubble';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'none' }}>
      <div className="bg-gradient-to-br from-[#040509] to-[#0a0a12]">
        <section id="hero" className="relative">
          <BillboardHero
            title="Showcasing Tomorrow’s Moments"
            subtitle="Experience the art of photography with a modern edge."
          />
        </section>
        <section id="about" className="bg-glass p-8">
          <SplitAbout
            description="As a photographer, I capture the stories behind our world—each frame a narrative, each click a moment frozen in time."
          />
        </section>
        <section id="portfolio" className="bg-[#0a0a0a] p-8">
          <BentoMediaGallery
            items={[
              { title: "Urban", image: "/images/placeholder1.avif" },
              { title: "Portrait", image: "/images/placeholder2.avif" },
              { title: "Event", image: "/images/placeholder3.avif" },
              { title: "Nature", image: "/images/placeholder4.avif" },
            ]}
          />
        </section>
        <section id="process" className="bg-[#0a0a0a] text-white p-8">
          <HowToBuy3D
            title="Our Process"
            steps={[
              { title: "Shoot", description: "Capturing the moment", image: "/images/placeholder5.avif", position: "left", isCenter: false },
              { title: "Edit", description: "Bringing life to the frame", image: "/images/placeholder6.avif", position: "center", isCenter: true },
              { title: "Deliver", description: "Presenting the final masterpiece", image: "/images/placeholder7.avif", position: "right", isCenter: false }
            ]}
          />
        </section>
        <section id="testimonials" className="bg-pattern text-black p-8">
          <CentralFAQ
            items={[
              { title: "Client A", content: "Incredible work! Couldn’t be happier." },
              { title: "Client B", content: "Amazing experience from start to finish!" },
            ]}
          />
        </section>
        <section id="contact" className="bg-[#0a0a0a] p-8">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <textarea placeholder="Message" className="border p-2 rounded" required></textarea>
            <ButtonHoverBubble text="Send Inquiry" onClick={() => alert('Inquiry sent!')} className="mt-4" />
          </form>
        </section>
      </div>
    </SiteThemeProvider>
  );
}