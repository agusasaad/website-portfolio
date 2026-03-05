'use client'

import { services } from '@/data/placeholder-data'
import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react'
import SectionLabel from '../reusable/section-label'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)
const MotionText = motion(Text)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
}

const ServiceRow = ({
  service,
}: {
  service: { id: string; title: string; description: string; img: string }
}) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return
    const rect = rowRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - 160)
    mouseY.set(e.clientY - rect.top - 100)
  }

  return (
    <MotionHStack
      ref={rowRef}
      w='100%'
      py={{ base: '24px', md: '32px' }}
      align={{ base: 'flex-start', md: 'center' }}
      justify='space-between'
      borderBottom='1px solid'
      borderColor='rgba(255,255,255,0.07)'
      position='relative'
      overflow='hidden'
      cursor='default'
      variants={rowVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: '10px', md: '40px' }}
    >
      {/* Floating image */}
      <MotionBox
        position='absolute'
        w='280px'
        h='180px'
        borderRadius='8px'
        overflow='hidden'
        pointerEvents='none'
        zIndex={10}
        style={{ x: springX, y: springY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        display={{ base: 'none', lg: 'block' }}
      >
        <Image
          src={service.img}
          alt={service.title}
          w='100%'
          h='100%'
          objectFit='cover'
        />
      </MotionBox>

      {/* Left: number + title */}
      <HStack gap={{ base: '14px', md: '20px' }} align='center'>
        <Text
          fontSize='13px'
          fontWeight={500}
          color='var(--orange)'
          fontFamily='monospace'
          opacity={hovered ? 1 : 0.4}
          transition='opacity 0.3s'
        >
          {service.id}
        </Text>

        <MotionText
          fontSize={{ base: '24px', sm: '30px', md: '38px', lg: '44px' }}
          fontWeight={600}
          lineHeight='105%'
          letterSpacing={{ base: '-0.5px', md: '-1.5px' }}
          textTransform='uppercase'
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
          animate={{ x: hovered ? 10 : 0 }}
          transition={{ duration: 0.35, ease: easing }}
        >
          {service.title}
        </MotionText>
      </HStack>

      {/* Right: description */}
      <Text
        fontSize={{ base: '13px', md: '14px' }}
        fontWeight={400}
        opacity={0.4}
        maxW={{ base: '100%', md: '300px' }}
        lineHeight='155%'
        textAlign={{ base: 'left', md: 'right' }}
        flexShrink={0}
      >
        {service.description}
      </Text>
    </MotionHStack>
  )
}

const Services = () => {
  return (
    <VStack
      as='section'
      w='100%'
      py={{ base: '50px', md: '80px' }}
      gap={{ base: '32px', md: '48px' }}
    >
      {/* <SectionLabel number='02' label='Services' /> */}

      <MotionBox
        w='100%'
        display='flex'
        flexDir='column'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </MotionBox>
    </VStack>
  )
}

export default Services
