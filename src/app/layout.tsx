import { Provider } from '@/components/ui/provider'
import localFont from 'next/font/local'
import NavBar from '@/components/navbar/nav-bar'
import { ReactLenis } from '@/utils/lenis'
import { ColorModeProvider } from '@/components/ui/color-mode'
import './globals.css'
import PageReveal from '@/components/pageReveal/page-reveal'

const ClashDisplay = localFont({
  src: '/fonts/ClashDisplay-Variable.ttf',
})

export const metadata = {
  metadataBase: new URL('https://agustinasaad.com.ar/'),
  title: 'Agustín Asaad - Front End Developer',
  description:
    'Desarrollador Front End en React y Next.js, creando aplicaciones web optimizadas y experiencias de usuario. Descubre mis proyectos y desafíos profesionales.',
  keywords:
    'Agustín Asaad, Front End Developer, desarrollador web, React, Next.js, desarrollo de aplicaciones, interfaces de usuario, diseño web, JavaScript, desarrollo web, UI/UX, optimización de rendimiento, integración de APIs, desarrollo responsivo, animaciones web, tecnologías modernas',
  author: 'Agustín Asaad',
  openGraph: {
    title: 'Agustín Asaad - Front End Developer',
    description:
      'Desarrollador Front End con experiencia en React y Next.js, especializado en la creación de interfaces intuitivas y optimizadas.',
    images: 'https://agustinasaad.com.ar/image.jpeg',
    url: 'https://agustinasaad.com.ar/',
    type: 'website',
    site_name: 'Agustín Asaad - Portfolio',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agustín Asaad - Front End Developer',
    description:
      'Soy desarrollador Front End con experiencia en React y Next.js. Diseño y desarrollo aplicaciones web con un enfoque en rendimiento y usabilidad.',
    images: 'https://agustinasaad.com.ar/image.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={ClashDisplay.className}>
        <ReactLenis root>
          <Provider>
            <ColorModeProvider>
              <NavBar />
              {children}
              <PageReveal />
            </ColorModeProvider>
          </Provider>
        </ReactLenis>
      </body>
    </html>
  )
}
