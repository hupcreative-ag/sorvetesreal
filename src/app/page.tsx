import Image from "next";
import ImageStreamHero from "@/components/ImageStreamHero";
import LinkButton from "@/components/LinkButton";
import {
  WhatsAppIcon,
  DeliveryIcon,
  StorePinIcon,
  InstagramIcon,
} from "@/components/Icons";

const HERO_IMAGES = [
  { src: "/fotos/foto-01.jpeg", alt: "Sorvetes Real do Solar - Sorvete artesanal" },
  { src: "/fotos/foto-02.jpeg", alt: "Sorvetes Real do Solar - Loja Ribeira" },
  { src: "/fotos/foto-03.jpeg", alt: "Sorvetes Real do Solar - Picolés e Sorvetes" },
  { src: "/fotos/foto-04.jpeg", alt: "Sorvetes Real do Solar - Sabor Chocolate Africano" },
  { src: "/fotos/foto-05.jpeg", alt: "Sorvetes Real do Solar - Momentos Especiais" },
  { src: "/fotos/foto-06.jpeg", alt: "Sorvetes Real do Solar - Solar Amado Bahia" },
  { src: "/fotos/foto-07.jpeg", alt: "Sorvetes Real do Solar - Sorvete de Frutas" },
  { src: "/fotos/foto-08.jpeg", alt: "Sorvetes Real do Solar - Tradição Soteropolitana" },
  { src: "/fotos/foto-09.jpeg", alt: "Sorvetes Real do Solar - Experiência Real" },
  { src: "/fotos/foto-10.jpeg", alt: "Sorvetes Real do Solar - Ribeira Salvador" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-real-red text-white flex flex-col justify-between items-center w-full relative overflow-x-hidden selection:bg-real-gold selection:text-real-wine">
      {/* 1. HERO SECTION */}
      <section className="w-full relative flex flex-col items-center justify-between pt-6 md:pt-10 pb-4 min-h-[70vh] md:min-h-[75vh]">
        {/* Brand Logo Header */}
        <header className="animate-stagger-1 z-20 flex flex-col items-center justify-center px-4 w-full max-w-lg">
          <div className="relative w-56 sm:w-64 md:w-80 aspect-[1439/809] drop-shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src="/logos/Logo-real-do-solar-01.png"
              alt="Sorvetes Real do Solar"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </header>

        {/* 3D Photo Corridor Stream Component */}
        <div className="w-full my-auto py-2 z-10 animate-stagger-2">
          <ImageStreamHero
            images={HERO_IMAGES}
            cards={10}
            speed={20}
            axis={52}
            className="w-full h-[240px] sm:h-[290px] md:h-[340px]"
          />
        </div>

        {/* Hero Tagline / Footer quote */}
        <div className="animate-stagger-3 z-20 text-center px-4 mt-2">
          <p className="text-real-gold font-bold text-2xl sm:text-3xl tracking-wider uppercase drop-shadow-sm">
            Made in Salvador, Bahia.
          </p>
        </div>
      </section>

      {/* 2. BUTTONS / LINKS SECTION */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-8 gap-4 z-20 animate-stagger-4 max-w-lg">
        <LinkButton
          variant="gold"
          href="http://api.whatsapp.com/send?phone=5571982908205&text="
          icon={<WhatsAppIcon className="w-7 h-7" />}
        >
          Fazer pedido - Consumidor
        </LinkButton>

        <LinkButton
          variant="gold"
          href="http://api.whatsapp.com/send?phone=5571987773174&text="
          icon={<WhatsAppIcon className="w-7 h-7" />}
        >
          Fazer pedido - Revendedor
        </LinkButton>

        <LinkButton
          variant="white"
          href="http://flow.page/deliveryreal"
          icon={<DeliveryIcon className="w-7 h-7" />}
        >
          Delivery
        </LinkButton>

        <LinkButton
          variant="gold"
          href="http://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTc3MzUxMDI0NDkwMTky?story_media_id=2829511269317691198&igshid=YmMyMTA2M2Y="
          icon={<StorePinIcon className="w-7 h-7" />}
        >
          Nossas Lojas
        </LinkButton>

        <LinkButton
          variant="white"
          href="https://www.instagram.com/solaramadobahia/"
          icon={<InstagramIcon className="w-7 h-7" />}
        >
          Solar Amado Bahia - Loja Ribeira
        </LinkButton>
      </section>

      {/* 3. FOOTER */}
      <footer className="w-full py-6 pb-8 flex flex-col items-center justify-center gap-2 text-center text-real-white/90 z-20">
        <a
          href="https://www.instagram.com/sorvetesreal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-real-gold hover:text-white transition-colors duration-300 font-bold text-xl tracking-wider uppercase group"
        >
          <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 text-real-gold group-hover:text-white" />
          <span>@sorvetesreal</span>
        </a>
        <p className="text-sm font-light tracking-widest opacity-80 uppercase text-white/80">
          Sorvetes Real &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
