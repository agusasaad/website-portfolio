import grupoZuritaCard from '@/assets/GrupoZurita/GrupoZuritaCard.webp'
import grupoZuritaBanner from '@/assets/GrupoZurita/grupoZuritaBanner.webp'
import driversCard from '@/assets/Drivers/DriverCard.webp'

import mawidaCard from '@/assets/PosadaMawida/mawidaCard.webp'
import mawidaBanner from '@/assets/PosadaMawida/headerModalPosada.webp'
import weDevelopCard from '@/assets/WeDevelop/CardWeDevelop.webp'
import weDevelopBanner from '@/assets/WeDevelop/headerModalWeDevelop.webp'
import symbionetCard from '@/assets/SymbioNet/Symbionet.webp'
import symbionetBanner from '@/assets/SymbioNet/first_banner.webp'
import portfolioCard from '@/assets/Portfolio/cardPortfolio.webp'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'About Me', href: '/about-me' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Building modern, high-performance web applications.',
    img: grupoZuritaBanner.src,
  },
  {
    id: '02',
    title: 'API & Backend Integration',
    description: 'Connecting frontends to REST APIs and backend services.',
    img: weDevelopBanner.src,
  },
  {
    id: '03',
    title: 'UI / UX & Animations',
    description:
      'Designing clean interfaces with smooth, interactive experiences.',
    img: symbionetBanner.src,
  },
  {
    id: '04',
    title: 'Optimization & Performance',
    description: 'Improving load speed, accessibility, and technical SEO.',
    img: mawidaBanner.src,
  },
]

export const projects = [
  {
    id: '01',
    title: 'Grupo Zurita',
    category: 'Web Development',
    year: '2025',
    description:
      'Corporate website for a real estate group with modern UI and seamless navigation.',
    img: grupoZuritaCard.src,
    tags: ['Next.js', 'Chakra UI', 'Framer Motion'],
  },
  {
    id: '02',
    title: 'Drivers',
    category: 'Web App',
    year: '2024',
    description:
      'Driver management platform with real-time tracking and reporting.',
    img: driversCard.src,
    tags: ['React', 'TypeScript', 'REST API'],
  },
  {
    id: '03',
    title: 'Posada Mawida',
    category: 'Landing Page',
    year: '2024',
    description:
      'Boutique hotel website with immersive visuals and booking integration.',
    img: mawidaCard.src,
    tags: ['Next.js', 'CSS', 'Framer Motion'],
  },
  {
    id: '04',
    title: 'WeDevelop',
    category: 'Corporate',
    year: '2024',
    description:
      'Software agency site showcasing services and case studies.',
    img: weDevelopCard.src,
    tags: ['React', 'Chakra UI', 'GSAP'],
  },
  {
    id: '05',
    title: 'SymbioNet',
    category: 'Web App',
    year: '2024',
    description:
      'Networking platform with interactive dashboards and data visualization.',
    img: symbionetCard.src,
    tags: ['Next.js', 'TypeScript', 'Zustand'],
  },
  {
    id: '06',
    title: 'Portfolio v1',
    category: 'Portfolio',
    year: '2023',
    description:
      'First iteration of my personal portfolio with scroll-driven animations.',
    img: portfolioCard.src,
    tags: ['React', 'GSAP', 'CSS'],
  },
]

export const technologies = [
  'TypeScript',
  'React',
  'Next.js',
  'CSS',
  'Chakra UI',
  'Zustand',
  'GSAP',
  'Framer Motion',
]
