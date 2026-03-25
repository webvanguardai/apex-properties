'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// ─── DATA ───────────────────────────────────────────────────────────────────

const featuredProperties = [
  {
    id: 1,
    title: 'One Palm Penthouse',
    price: 'AED 28,500,000',
    location: 'Palm Jumeirah',
    sqm: '745 m²',
    beds: 5,
    baths: 6,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=85',
    tag: 'Exclusive',
  },
  {
    id: 2,
    title: 'Burj Vista Sky Suite',
    price: 'AED 12,900,000',
    location: 'Downtown Dubai',
    sqm: '312 m²',
    beds: 3,
    baths: 4,
    img: 'https://images.unsplash.com/photo-1614965655698-cf67e2e5e9d3?w=800&h=600&fit=crop&q=85',
    tag: 'New Listing',
  },
  {
    id: 3,
    title: 'Marina Infinity Tower',
    price: 'AED 6,750,000',
    location: 'Dubai Marina',
    sqm: '198 m²',
    beds: 2,
    baths: 3,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=85',
    tag: 'Hot Deal',
  },
]

const allProperties = [
  {
    id: 1,
    title: 'One Palm Penthouse',
    price: 'AED 28,500,000',
    priceVal: 28500000,
    location: 'Palm Jumeirah',
    zone: 'Palm',
    type: 'Penthouse',
    sqm: '745 m²',
    beds: 5,
    baths: 6,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Burj Vista Sky Suite',
    price: 'AED 12,900,000',
    priceVal: 12900000,
    location: 'Downtown Dubai',
    zone: 'Downtown',
    type: 'Apartment',
    sqm: '312 m²',
    beds: 3,
    baths: 4,
    img: 'https://images.unsplash.com/photo-1614965655698-cf67e2e5e9d3?w=600&h=450&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Marina Infinity Tower',
    price: 'AED 6,750,000',
    priceVal: 6750000,
    location: 'Dubai Marina',
    zone: 'Marina',
    type: 'Apartment',
    sqm: '198 m²',
    beds: 2,
    baths: 3,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=450&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'DIFC Gate Residence',
    price: 'AED 9,200,000',
    priceVal: 9200000,
    location: 'DIFC',
    zone: 'DIFC',
    type: 'Apartment',
    sqm: '248 m²',
    beds: 3,
    baths: 3,
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=450&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Emirates Hills Mansion',
    price: 'AED 55,000,000',
    priceVal: 55000000,
    location: 'Emirates Hills',
    zone: 'Palm',
    type: 'Villa',
    sqm: '1,840 m²',
    beds: 7,
    baths: 9,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=450&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Business Bay Penthouse',
    price: 'AED 4,800,000',
    priceVal: 4800000,
    location: 'Business Bay',
    zone: 'Downtown',
    type: 'Penthouse',
    sqm: '156 m²',
    beds: 2,
    baths: 2,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=450&fit=crop&q=80',
  },
]

const stats = [
  { value: 'AED 2.1B+', label: 'in closed transactions' },
  { value: '340+', label: 'properties sold since 2013' },
  { value: '8–12%', label: 'avg. rental yield p.a.' },
  { value: '72h', label: 'avg. time to first offer' },
]

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-[#3B82F6] flex items-center justify-center">
            <span className="font-bold text-white text-base leading-none">A</span>
          </div>
          <div>
            <span className="font-bold text-white text-lg tracking-wide">APEX</span>
            <span className="block text-[#3B82F6] text-[9px] tracking-[0.35em] uppercase -mt-0.5">Properties Dubai</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Properties', href: '#listings' },
            { label: 'Featured', href: '#featured' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2563EB] transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </header>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0A0A0A] overflow-hidden pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="Dubai skyline"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
      </div>

      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase">AED 2.1B+ in Closed Transactions · Since 2013</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.92] tracking-tight mb-6"
        >
          The Address<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
            Defines
          </span>
          <br />The Value.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl max-w-lg mb-10"
        >
          Palm Jumeirah · DIFC · Emirates Hills. Handpicked residences with 8–12% annual rental yields. Every listing reviewed by our senior advisors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#listings"
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#2563EB] transition-colors duration-200"
          >
            View All Properties
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
          >
            Schedule a Private Viewing
          </a>
        </motion.div>

        {/* Featured property cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProperties.map((prop, i) => (
            <motion.a
              key={prop.id}
              href="#listings"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={prop.img}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                <span className="absolute top-3 left-3 bg-[#3B82F6] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  {prop.tag}
                </span>
              </div>
              <div className="p-4">
                <p className="text-white/40 text-xs mb-1 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {prop.location}
                </p>
                <h3 className="text-white font-semibold mb-2">{prop.title}</h3>
                <p className="text-[#3B82F6] font-bold text-lg">{prop.price}</p>
                <div className="flex items-center gap-3 mt-2 text-white/40 text-xs">
                  <span>{prop.beds} beds</span>
                  <span>·</span>
                  <span>{prop.baths} baths</span>
                  <span>·</span>
                  <span>{prop.sqm}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROPERTY LISTINGS ───────────────────────────────────────────────────────

type PriceRange = 'all' | 'under1m' | '1m-3m' | '3m-5m' | '5m+'

function PropertyListings() {
  const [activeType, setActiveType] = useState<string>('All')
  const [activeZone, setActiveZone] = useState<string>('All')
  const [activePriceRange, setActivePriceRange] = useState<PriceRange>('all')
  const [inquiredId, setInquiredId] = useState<number | null>(null)

  const types = ['All', 'Apartment', 'Villa', 'Penthouse']
  const zones = ['All', 'DIFC', 'Marina', 'Downtown', 'Palm']
  const priceRanges: { label: string; value: PriceRange }[] = [
    { label: 'Any price', value: 'all' },
    { label: 'Under AED 1M', value: 'under1m' },
    { label: 'AED 1M–3M', value: '1m-3m' },
    { label: 'AED 3M–5M', value: '3m-5m' },
    { label: 'AED 5M+', value: '5m+' },
  ]

  const filtered = allProperties.filter((p) => {
    const typeMatch = activeType === 'All' || p.type === activeType
    const zoneMatch = activeZone === 'All' || p.zone === activeZone
    const priceMatch =
      activePriceRange === 'all' ||
      (activePriceRange === 'under1m' && p.priceVal < 1000000) ||
      (activePriceRange === '1m-3m' && p.priceVal >= 1000000 && p.priceVal < 3000000) ||
      (activePriceRange === '3m-5m' && p.priceVal >= 3000000 && p.priceVal < 5000000) ||
      (activePriceRange === '5m+' && p.priceVal >= 5000000)
    return typeMatch && zoneMatch && priceMatch
  })

  return (
    <section id="listings" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Current Listings
          </h2>
          <p className="text-white/40">{allProperties.length} handpicked residences · Updated weekly</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Type filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white/40 text-xs uppercase tracking-widest mr-1">Type:</span>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeType === t
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="hidden md:block w-px bg-white/10" />

          {/* Zone filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white/40 text-xs uppercase tracking-widest mr-1">Zone:</span>
            {zones.map((z) => (
              <button
                key={z}
                onClick={() => setActiveZone(z)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeZone === z
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {z}
              </button>
            ))}
          </div>

          <div className="hidden md:block w-px bg-white/10" />

          {/* Price filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white/40 text-xs uppercase tracking-widest mr-1">Price:</span>
            <select
              value={activePriceRange}
              onChange={(e) => setActivePriceRange(e.target.value as PriceRange)}
              className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[#3B82F6] transition-colors"
            >
              {priceRanges.map((r) => (
                <option key={r.value} value={r.value} className="bg-[#111]">
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center text-white/30 text-lg"
            >
              No properties match your filters. Try adjusting them.
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((prop, i) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#3B82F6]/40 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={prop.img}
                      alt={prop.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 bg-[#0A0A0A]/70 backdrop-blur text-white/70 text-xs px-2.5 py-1 rounded-md border border-white/10">
                      {prop.type}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-white/40 text-xs mb-1.5 flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {prop.location}
                    </p>
                    <h3 className="text-white font-semibold text-base mb-2">{prop.title}</h3>
                    <p className="text-[#3B82F6] font-bold text-xl mb-3">{prop.price}</p>

                    <div className="flex items-center gap-4 text-white/40 text-xs mb-5">
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        {prop.beds} beds
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12H2M6 12V5a2 2 0 012-2h8a2 2 0 012 2v7M2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6" />
                        </svg>
                        {prop.baths} baths
                      </span>
                      <span>{prop.sqm}</span>
                    </div>

                    {inquiredId === prop.id ? (
                      <div className="w-full py-2.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold text-center">
                        ✓ We&apos;ll contact you shortly
                      </div>
                    ) : (
                      <button
                        onClick={() => setInquiredId(prop.id)}
                        className="w-full py-2.5 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-200"
                      >
                        Request Private Viewing
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// ─── FEATURED DEVELOPMENT ────────────────────────────────────────────────────

function FeaturedDevelopment() {
  return (
    <section id="featured" className="py-0 bg-[#0A0A0A]">
      <div className="relative min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90"
          alt="Iconic Tower — DIFC"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col justify-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#3B82F6] text-white text-xs font-bold px-3 py-1.5 rounded-md mb-6 uppercase tracking-widest">
              ★ Featured Development
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Iconic Tower<br />
              <span className="text-[#3B82F6]">DIFC</span>
            </h2>
            <p className="text-white/50 text-base max-w-md mb-8">
              Redefining the Dubai skyline. 52 floors of curated residences with panoramic views of Burj Khalifa and the Arabian Gulf.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Starting price', value: 'AED 4.2M' },
                { label: 'Size from', value: '142 m²' },
                { label: 'Bedrooms', value: '1–4 Beds' },
                { label: 'Handover', value: 'Q4 2027' },
              ].map((spec) => (
                <div key={spec.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                  <p className="text-white/40 text-xs mb-1">{spec.label}</p>
                  <p className="text-white font-bold text-base">{spec.value}</p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/971501234567?text=I'm%20interested%20in%20Iconic%20Tower%20DIFC`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1EBE5B] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Inquire on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── STATS ───────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="py-20 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    budget: '',
    propertyType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // silent fail — demo
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Schedule a Private Viewing
          </h2>
          <p className="text-white/40 text-lg">Share your criteria. A senior advisor responds within 2 hours.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-[#111] rounded-2xl border border-white/5">
                <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Request received!</h3>
                <p className="text-white/40 max-w-xs">Our team will contact you within 2 hours via WhatsApp or phone.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#111] rounded-2xl border border-white/5 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#3B82F6] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+971 50 XXX XXXX"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#3B82F6] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Budget *</label>
                    <select
                      required
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#3B82F6] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111] text-white/40">Select budget</option>
                      <option value="under-1m" className="bg-[#111]">Under AED 1M</option>
                      <option value="1m-3m" className="bg-[#111]">AED 1M – 3M</option>
                      <option value="3m-5m" className="bg-[#111]">AED 3M – 5M</option>
                      <option value="5m-plus" className="bg-[#111]">AED 5M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Property Type</label>
                    <select
                      value={form.propertyType}
                      onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#3B82F6] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111] text-white/40">Any type</option>
                      <option value="apartment" className="bg-[#111]">Apartment</option>
                      <option value="villa" className="bg-[#111]">Villa</option>
                      <option value="penthouse" className="bg-[#111]">Penthouse</option>
                      <option value="townhouse" className="bg-[#111]">Townhouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Any specific requirements? (location, views, amenities...)"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#3B82F6] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors resize-none placeholder-white/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B82F6] text-white py-3.5 rounded-lg font-semibold hover:bg-[#2563EB] transition-colors duration-200"
                >
                  Request a Private Viewing
                </button>
              </form>
            )}
          </motion.div>

          {/* Map + contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📍', label: 'Office', value: 'Level 14, The Exchange, Business Bay, Dubai' },
                { icon: '📞', label: 'Phone', value: '+971 4 XXX XXXX' },
                { icon: '✉️', label: 'Email', value: 'hello@apex-properties.ae' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM' },
              ].map((item) => (
                <div key={item.label} className="bg-[#111] border border-white/5 rounded-xl p-4">
                  <p className="text-lg mb-1">{item.icon}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map — Business Bay */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2648!3d25.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d8da9c8f4f%3A0x3c7f4e3afb0c5a4!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-md bg-[#3B82F6] flex items-center justify-center">
                <span className="font-bold text-white text-sm">A</span>
              </div>
              <span className="font-bold text-white text-lg tracking-wide">APEX PROPERTIES</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs">AED 2.1B+ in closed transactions. Senior advisors only — no junior brokers.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Explore</p>
              <div className="flex flex-col gap-2">
                {['Properties', 'Featured Development', 'Contact Us'].map((l) => (
                  <a key={l} href="#listings" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Legal</p>
              <div className="flex flex-col gap-2">
                {['Privacy Policy', 'Terms of Service', 'RERA Compliance'].map((l) => (
                  <a key={l} href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Apex Properties Dubai. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-mono px-3 py-1.5 rounded-md">
              RERA License: 12345678
            </span>
            <span className="text-white/20 text-xs">DED: 987654</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── WHATSAPP FLOAT ──────────────────────────────────────────────────────────

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971501234567?text=Hello%20Apex%20Properties%2C%20I%27d%20like%20to%20inquire%20about%20a%20property"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <span className="hidden group-hover:block bg-[#0A0A0A] border border-white/10 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
        Chat with an agent
      </span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 hover:scale-110 transition-transform duration-200">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
    </a>
  )
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <PropertyListings />
      <FeaturedDevelopment />
      <Stats />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
