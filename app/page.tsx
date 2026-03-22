'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Apex Properties Dubai',
  description: 'Premium luxury real estate agency in Dubai specializing in villas, penthouses, and investment properties.',
  url: 'https://apex-properties.vercel.app',
  logo: 'https://apex-properties.vercel.app/favicon.svg',
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
  telephone: '+971-4-XXX-XXXX',
  email: 'hello@apex-properties.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 28, One Central, Dubai World Trade Centre',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHours: 'Mo-Sa 09:00-18:00',
  sameAs: [
    'https://instagram.com/apexpropertiesdubai',
    'https://linkedin.com/company/apex-properties-dubai',
  ],
  areaServed: [
    'Palm Jumeirah',
    'Downtown Dubai',
    'Dubai Marina',
    'Emirates Hills',
    'Business Bay',
    'DIFC',
  ],
}

const properties = [
  {
    title: 'Signature Villa — Palm Jumeirah',
    price: 'AED 42,000,000',
    beds: 6,
    baths: 8,
    sqft: '12,400',
    type: 'Villa',
    tag: 'Exclusive Listing',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Sky Penthouse — Downtown Dubai',
    price: 'AED 18,500,000',
    beds: 4,
    baths: 5,
    sqft: '7,200',
    type: 'Penthouse',
    tag: 'New Listing',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Marina Residence — Dubai Marina',
    price: 'AED 8,200,000',
    beds: 3,
    baths: 4,
    sqft: '3,600',
    type: 'Apartment',
    tag: 'Price Reduced',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Estate Mansion — Emirates Hills',
    price: 'AED 75,000,000',
    beds: 8,
    baths: 10,
    sqft: '22,000',
    type: 'Mansion',
    tag: 'Off Market',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80',
  },
]

const services = [
  {
    icon: '🏛️',
    title: 'Luxury Sales',
    desc: 'Exclusive access to Dubai\'s most prestigious residential properties — villas, penthouses, and ultra-luxury apartments in prime locations.',
  },
  {
    icon: '📈',
    title: 'Investment Advisory',
    desc: 'Data-driven investment strategies for off-plan, ready properties, and portfolio diversification. Maximize ROI in Dubai\'s dynamic market.',
  },
  {
    icon: '🔑',
    title: 'Property Management',
    desc: 'Full-service management for owners and investors. Tenant sourcing, maintenance, financials, and concierge — all handled seamlessly.',
  },
  {
    icon: '🌍',
    title: 'International Buyers',
    desc: 'Multilingual team (Arabic, English, Russian, Mandarin) guiding international clients through every step — from search to keys.',
  },
  {
    icon: '🏗️',
    title: 'Off-Plan Projects',
    desc: 'Early access to Dubai\'s most anticipated developments. We partner directly with top developers for exclusive pre-launch pricing.',
  },
  {
    icon: '🛂',
    title: 'Golden Visa Advisory',
    desc: 'Property investment pathway to UAE Golden Visa residency. We handle the full process alongside our legal partners.',
  },
]

const testimonials = [
  {
    name: 'Alexander Volkov',
    role: 'Private Investor, Moscow',
    text: 'Apex Properties found us our dream villa on Palm Jumeirah within two weeks. Their market knowledge and professionalism is unmatched. The ROI on our portfolio has exceeded all expectations.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Sophie Chen',
    role: 'Tech Executive, Singapore',
    text: 'As a first-time Dubai buyer, I was nervous. The Apex team walked me through every detail, from mortgage options to golden visa eligibility. Couldn\'t have done it without them.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'James Harrington',
    role: 'Director, London',
    text: 'We\'ve worked with many agencies across markets, but Apex Properties stands apart. Their off-market access and negotiation skills secured us a property at 15% below asking price.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Layla Al Rashidi',
    role: 'UAE National, Dubai',
    text: 'Managing three investment properties is effortless with Apex\'s management service. Monthly reports, zero vacancies, and the concierge team is always available.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80', alt: 'Luxury Interior Dubai' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80', alt: 'Premium Apartment' },
  { src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&h=400&fit=crop&q=80', alt: 'Dubai Marina Views' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&q=80', alt: 'Modern Villa Pool' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop&q=80', alt: 'Penthouse Terrace' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80', alt: 'Villa Exterior' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A96E]">★</span>
      ))}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', budget: '', message: '', type: 'buy' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/placeholder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    if (res.ok || res.status === 422) setSubmitted(true)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-md border-b border-[#C9A96E]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-none bg-[#C9A96E] flex items-center justify-center">
              <span className="font-display font-bold text-[#0A1628] text-xl">A</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-xl tracking-wide">APEX</span>
              <span className="block text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-sans -mt-1">Properties Dubai</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {['Properties', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#8A9BB5] hover:text-[#C9A96E] text-sm tracking-wide font-sans transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:block bg-[#C9A96E] text-[#0A1628] px-6 py-3 text-sm font-semibold tracking-wide hover:bg-[#E8D5A3] transition-colors duration-300"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
            alt="Dubai Luxury Property"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

        {/* Decorative line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-[#C9A96E]" />
            Dubai&apos;s Premier Real Estate Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8"
          >
            Where Luxury
            <br />
            <span className="text-[#C9A96E] italic">Meets Home</span>
            <span className="text-[#C9A96E]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#8A9BB5] text-lg md:text-xl max-w-xl mb-12 font-sans leading-relaxed"
          >
            Exclusive access to Dubai&apos;s finest properties. From Palm Jumeirah ultra-villas
            to Downtown penthouses — we find extraordinary homes for extraordinary people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#properties" className="bg-[#C9A96E] text-[#0A1628] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#E8D5A3] transition-all duration-300 text-center">
              View Properties
            </a>
            <a href="#contact" className="border border-[#C9A96E]/50 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300 text-center">
              Book Consultation
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#C9A96E]/20 pt-12"
          >
            {[
              { num: 'AED 2B+', label: 'Transactions' },
              { num: '850+', label: 'Properties Sold' },
              { num: '15+', label: 'Years Experience' },
              { num: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-[#C9A96E]">{stat.num}</div>
                <div className="text-[#8A9BB5] text-sm mt-1 tracking-wide font-sans">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-[#C9A96E]" />
              Featured Listings
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0A1628] leading-tight">
                Exclusive<br />
                <span className="italic text-[#C9A96E]">Properties</span>
              </h2>
              <p className="text-[#8A9BB5] text-base leading-relaxed font-sans">
                Hand-selected luxury properties across Dubai&apos;s most prestigious addresses.
                Each listing represents an exceptional lifestyle opportunity.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={prop.img}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A96E] text-[#0A1628] text-xs font-semibold px-3 py-1 tracking-wide uppercase">
                      {prop.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0A1628]/80 text-white text-xs px-3 py-1 tracking-wide">
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-[#0A1628] mb-2">{prop.title}</h3>
                  <div className="font-display font-bold text-2xl text-[#C9A96E] mb-4">{prop.price}</div>
                  <div className="flex items-center gap-6 text-[#8A9BB5] text-sm font-sans">
                    <span className="flex items-center gap-1">🛏 {prop.beds} Beds</span>
                    <span className="flex items-center gap-1">🚿 {prop.baths} Baths</span>
                    <span className="flex items-center gap-1">📐 {prop.sqft} sqft</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#F0EDE8]">
                    <button className="text-[#C9A96E] text-sm font-semibold tracking-wide hover:text-[#0A1628] transition-colors flex items-center gap-2 group-hover:gap-4 duration-300">
                      View Property Details <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a href="#contact" className="inline-block border border-[#0A1628] text-[#0A1628] px-10 py-4 text-sm font-semibold tracking-wide hover:bg-[#0A1628] hover:text-white transition-all duration-300">
              Request Full Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4">What We Do</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Full-Service<br />
              <span className="italic text-[#C9A96E]">Real Estate Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-[#1A3060] hover:border-[#C9A96E]/40 bg-[#112040] hover:bg-[#1A3060]/50 p-8 transition-all duration-500 group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#8A9BB5] text-sm leading-relaxed font-sans">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Apex Properties Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] p-8 w-48 h-48 flex flex-col items-center justify-center text-center">
                <span className="font-display font-bold text-4xl text-[#0A1628]">15+</span>
                <span className="font-sans text-xs text-[#0A1628] font-semibold tracking-wide uppercase mt-2">Years in Dubai Market</span>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C9A96E]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-[#C9A96E]" />
                Our Story
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0A1628] leading-tight mb-8">
                Built on Trust,
                <br />
                <span className="italic text-[#C9A96E]">Driven by Results</span>
              </h2>
              <p className="text-[#8A9BB5] text-base leading-relaxed font-sans mb-6">
                Founded in 2010 by property veterans who believed Dubai&apos;s luxury market
                deserved more than transactional agents — Apex Properties was built on the
                principle that every client deserves exclusive, personalized service.
              </p>
              <p className="text-[#8A9BB5] text-base leading-relaxed font-sans mb-10">
                Today, our team of 20+ multilingual specialists covers every corner of Dubai&apos;s
                premium property landscape. From Emirati families upgrading their family home,
                to international investors building generational wealth — we deliver results that
                exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: 'AED 2B+', label: 'Total Transactions' },
                  { num: '850+', label: 'Properties Sold' },
                  { num: '20+', label: 'Expert Advisors' },
                  { num: '4', label: 'Languages Spoken' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#C9A96E] pl-4">
                    <div className="font-display font-bold text-2xl text-[#0A1628]">{stat.num}</div>
                    <div className="text-[#8A9BB5] text-sm font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4">Portfolio</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              A Glimpse of
              <span className="italic text-[#C9A96E]"> Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'md:row-span-2 aspect-[4/5] md:aspect-auto' : 'aspect-[4/3]'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-display italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4">Client Stories</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0A1628]">
              What Our Clients
              <span className="italic text-[#C9A96E]"> Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 border border-[#E8EDF5] hover:border-[#C9A96E]/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="mb-6">
                  <StarRating count={t.rating} />
                </div>
                <p className="text-[#8A9BB5] text-base leading-relaxed font-sans italic mb-8">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[#0A1628]">{t.name}</div>
                    <div className="text-[#C9A96E] text-xs font-sans tracking-wide">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A96E] text-sm tracking-[0.4em] uppercase font-sans mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-[#C9A96E]" />
                Get In Touch
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
                Find Your
                <br />
                <span className="italic text-[#C9A96E]">Dream Property</span>
              </h2>
              <p className="text-[#8A9BB5] text-base leading-relaxed font-sans mb-10">
                Our advisors are available 7 days a week to help you navigate Dubai&apos;s
                property market. Whether you&apos;re buying, investing, or managing — we&apos;re here.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: '📍', label: 'Office', value: 'Level 28, One Central, Dubai World Trade Centre' },
                  { icon: '📞', label: 'Phone', value: '+971 4 XXX XXXX' },
                  { icon: '✉️', label: 'Email', value: 'hello@apex-properties.ae' },
                  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-[#C9A96E] text-xs font-sans tracking-widest uppercase mb-1">{item.label}</div>
                      <div className="text-white font-sans text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="w-full h-64 overflow-hidden border border-[#1A3060]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.953!2d55.2903!3d25.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1cbb7e2!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[#C9A96E]/30 bg-[#112040]">
                  <span className="text-5xl mb-6">✓</span>
                  <h3 className="font-display font-bold text-2xl text-white mb-4">Thank You!</h3>
                  <p className="text-[#8A9BB5] font-sans">Your inquiry has been received. An Apex advisor will contact you within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#112040] p-8 md:p-10 border border-[#1A3060]"
                >
                  <h3 className="font-display font-bold text-2xl text-white mb-8">Book a Consultation</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#1A3060] focus:border-[#C9A96E] text-white px-4 py-3 text-sm font-sans outline-none transition-colors"
                          placeholder="Alexander Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#1A3060] focus:border-[#C9A96E] text-white px-4 py-3 text-sm font-sans outline-none transition-colors"
                          placeholder="name@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#1A3060] focus:border-[#C9A96E] text-white px-4 py-3 text-sm font-sans outline-none transition-colors"
                          placeholder="+971 50 XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">Budget (AED)</label>
                        <select
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#1A3060] focus:border-[#C9A96E] text-white px-4 py-3 text-sm font-sans outline-none transition-colors"
                        >
                          <option value="">Select range</option>
                          <option value="2-5M">2M – 5M AED</option>
                          <option value="5-10M">5M – 10M AED</option>
                          <option value="10-25M">10M – 25M AED</option>
                          <option value="25M+">25M+ AED</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">I Want To</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['buy', 'invest', 'rent'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormState({ ...formState, type: t })}
                            className={`py-3 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                              formState.type === t
                                ? 'bg-[#C9A96E] border-[#C9A96E] text-[#0A1628]'
                                : 'border-[#1A3060] text-[#8A9BB5] hover:border-[#C9A96E]/50'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#8A9BB5] text-xs font-sans tracking-widest uppercase mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#1A3060] focus:border-[#C9A96E] text-white px-4 py-3 text-sm font-sans outline-none transition-colors resize-none"
                        placeholder="Tell us about your ideal property..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#C9A96E] text-[#0A1628] py-4 font-semibold text-sm tracking-widest uppercase hover:bg-[#E8D5A3] transition-colors duration-300"
                    >
                      Request Consultation
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050D1A] py-12 border-t border-[#1A3060]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C9A96E] flex items-center justify-center">
                <span className="font-display font-bold text-[#0A1628] text-sm">A</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-wide">APEX PROPERTIES</span>
            </div>
            <p className="text-[#8A9BB5] text-sm font-sans text-center">
              © 2026 Apex Properties Dubai. RERA License: 12345. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'RERA'].map((link) => (
                <a key={link} href="#" className="text-[#8A9BB5] hover:text-[#C9A96E] text-sm font-sans transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/971501234567?text=Hello%20Apex%20Properties%2C%20I'm%20interested%20in%20a%20property%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}
