import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  MapPin,
  Star,
  Truck,
} from "lucide-react";

import { InstagramIcon, WhatsappIcon } from "@/components/brand-icons";
import { ComponentType } from "react";

export const SOCIAL_LINKS = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/pizzariakideliciaofc/',
    label: 'Instagram',
    handle: '@sementeaju',
    Icon: InstagramIcon,
    featured: false,
  },
  {
    key: 'whatsapp',
    href: "https://api.whatsapp.com/send?phone=5579988345326&text=Oi%2C%20gostaria%20de%20fazer%20um%20pedido",
    label: 'WhatsApp',
    handle: '(79) 988345-326&',
    Icon: WhatsappIcon,
    featured: true,
  },
] as const satisfies readonly {
  key: string
  href: string
  label: string
  handle: string
  Icon: ComponentType<{ className?: string }>
  featured: boolean
}[]

const images = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xg0K64uZm7rTSf557A7MhLpuNHFyVg.png",
  sweet:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jcpJTNq6pd3uarFlgyBqYB0sBgLeNo.png",
  burger:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YR9EOH3cfhL86TSOxY1FGBDYilABq.png",
  caprese:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WF9azOpnOQZckk3PbVjx10JLDqhKHx.png",
  special:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4vnJxPQc8zYVNI7HlVW1luNoPV8r8p.png",
  drink:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XKr7mJOKyf4tqmXWKhKgxlVeYc6zI3.png",
};

const highlights = [
  {
    name: "Pizza KiDelicia",
    detail: "Bacon, frango, milho, cebola e catupiry",
    price: "R$ 49,90",
    image: images.hero,
    tag: "A mais pedida",
  },
  {
    name: "Pizza da Casa",
    detail: "Carne desfiada, cebola verde e molho especial",
    price: "R$ 54,90",
    image: images.special,
    tag: "Exclusiva",
  },
  {
    name: "Chocolate Lovers",
    detail: "Muito chocolate granulado na massa crocante",
    price: "R$ 39,90",
    image: images.sweet,
    tag: "Sobremesa",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#171311] text-[#f9f0e4] selection:bg-[#ed5d2f] selection:text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="flex h-24 items-center justify-between border-b border-white/10">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="KiDelicia início"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-[#ed5d2f] text-xl font-black text-white">
              K
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight">
              Ki<span className="text-[#ed5d2f]">Delicia</span>
            </span>
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-[#c9bdb1] md:flex">
            <a
              className="text-white transition hover:text-[#ed5d2f]"
              href="#inicio"
            >
              Início
            </a>
            <a className="transition hover:text-[#ed5d2f]" href="#destaques">
              Destaques
            </a>
            <a className="transition hover:text-[#ed5d2f]" href="#sobre">
              Nossa história
            </a>
            <a className="transition hover:text-[#ed5d2f]" href="#contato">
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/5511999999999"
            className="hidden items-center gap-2 rounded-full bg-[#ed5d2f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#f4774c] sm:flex"
          >
            Pedir agora <ArrowUpRight data-icon="inline-end" />
          </a>
        </header>

        <section
          id="inicio"
          className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20"
        >
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#f2a14a]">
              <span className="h-px w-10 bg-[#f2a14a]" /> Sabor que aproxima
            </div>
            <h1 className="font-serif text-6xl font-bold leading-[0.97] tracking-[-0.04em] text-[#fff8ef] sm:text-7xl lg:text-[88px]">
              Pizza boa é <span className="text-[#ed5d2f]">aquela</span> que
              vira memória.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#bdaea2]">
              Massa artesanal, ingredientes de verdade e aquele sabor caseiro
              que faz você pedir mais uma fatia.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#destaques"
                className="inline-flex items-center gap-3 rounded-full bg-[#ed5d2f] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#f4774c]"
              >
                Ver sabores <ChevronRight data-icon="inline-end" />
              </a>
              <a
                href="#sobre"
                className="text-sm font-bold text-[#f6e2ce] underline decoration-[#ed5d2f] decoration-2 underline-offset-8"
              >
                Conheça a KiDelicia
              </a>
            </div>
            <div className="mt-14 flex items-center gap-8 border-t border-white/10 pt-7 text-sm text-[#bdaea2]">
              <div>
                <strong className="block text-2xl text-white">4.9</strong>
                <span className="flex items-center gap-1">
                  <Star
                    className="fill-[#f2a14a] text-[#f2a14a]"
                    data-icon="inline-start"
                  />{" "}
                  avaliação média
                </span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <strong className="block text-2xl text-white">25 min</strong>
                <span>tempo médio de entrega</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[630px] lg:mr-0">
            <div className="absolute -right-5 -top-5 size-28 rounded-full border border-[#f2a14a]/30" />
            <div className="absolute -bottom-8 -left-8 size-36 rounded-full bg-[#ed5d2f]/15 blur-2xl" />
            <div className="relative aspect-[0.98] overflow-hidden rounded-[42%_42%_14%_14%] border-8 border-[#2b201b] shadow-2xl shadow-black/40">
              <img
                src={images.hero}
                alt="Pizza KiDelicia com bacon, frango e queijo"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#281d18] px-5 py-4 shadow-xl">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#f2a14a]/15 text-[#f2a14a]">
                <Truck data-icon="inline-start" />
              </span>
              <span className="text-sm">
                <strong className="block text-white">Entrega quentinha</strong>
                <span className="text-[#bdaea2]">até a sua porta</span>
              </span>
            </div>
          </div>
        </section>

        <section id="destaques" className="border-t border-white/10 py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#ed5d2f]">
                Feito para compartilhar
              </p>
              <h2 className="font-serif text-5xl font-bold tracking-tight text-[#fff8ef]">
                Os queridinhos da casa
              </h2>
            </div>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-2 text-sm font-bold text-[#f2a14a]"
            >
              Quero experimentar <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#211915] transition hover:-translate-y-1 hover:border-[#ed5d2f]/60"
              >
                <div className="relative aspect-[1.15] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#171311]/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f2a14a]">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl font-bold text-[#fff8ef]">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap text-sm font-bold text-[#f2a14a]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#bdaea2]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="sobre"
          className="grid items-center gap-12 border-t border-white/10 py-24 lg:grid-cols-2"
        >
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images.burger}
                alt="Hambúrguer artesanal KiDelicia"
                className="mt-10 aspect-[0.82] w-full rounded-3xl object-cover"
              />
              <img
                src={images.caprese}
                alt="Pizza de tomate e manjericão"
                className="aspect-[0.82] w-full rounded-3xl object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#ed5d2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white">
              Desde 2018
            </div>
          </div>
          <div className="max-w-lg">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#ed5d2f]">
              Nossa história
            </p>
            <h2 className="font-serif text-5xl font-bold leading-tight text-[#fff8ef]">
              Mais que pizza.
              <br />
              <span className="text-[#f2a14a]">É KiDelicia.</span>
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#bdaea2]">
              Nascemos com uma missão simples: levar comida gostosa e feita com
              carinho para a mesa das pessoas. Cada receita tem um toque nosso,
              mas o ingrediente principal continua sendo o mesmo: paixão.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-[#f2a14a]">
                  <Clock3 />
                </span>
                <span>
                  <strong className="block text-white">Todos os dias</strong>
                  <small className="text-[#bdaea2]">18h às 23h</small>
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#f2a14a]">
                  <MapPin />
                </span>
                <span>
                  <strong className="block text-white">Pertinho de você</strong>
                  <small className="text-[#bdaea2]">Rua do Sabor, 123</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="relative mb-16 overflow-hidden rounded-[32px] bg-[#ed5d2f] px-7 py-14 sm:px-14"
        >
          <div className="absolute -right-10 -top-20 size-64 rounded-full border-[40px] border-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Bateu aquela fome?
              </p>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                Seu próximo sabor
                <br />
                favorito está aqui.
              </h2>
            </div>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-3 rounded-full bg-[#fff8ef] px-7 py-4 font-bold text-[#ed5d2f] transition hover:bg-white"
            >
              Pedir pelo WhatsApp <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-[#9e8e82] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif text-xl font-bold text-[#fff8ef]">
            Ki<span className="text-[#ed5d2f]">Delicia</span>
          </span>
          <span>© 2024 KiDelicia Pizzaria. Feito com carinho.</span>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="social-link">
                <link.Icon />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
