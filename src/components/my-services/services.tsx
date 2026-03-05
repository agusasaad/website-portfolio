'use client'

import { services } from '@/data/placeholder-data'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import SectionLabel from '../reusable/section-label'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const ServiceCard = ({
  service,
}: {
  service: { id: string; title: string; description: string }
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <MotionBox
      variants={fadeUp}
      w='100%'
      p={{ base: '24px', md: '32px', lg: '40px' }}
      border='1px solid'
      borderColor={
        hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'
      }
      borderRadius='8px'
      cursor='default'
      position='relative'
      overflow='hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      minH={{ base: '200px', md: '240px' }}
      bg={hovered ? 'rgba(255,255,255,0.02)' : 'transparent'}
    >
      {/* Top: number + arrow */}
      <HStack
        w='100%'
        justify='space-between'
        align='center'
        mb={{ base: '32px', md: '48px' }}
      >
        <Text
          fontSize={{ base: '48px', md: '64px', lg: '72px' }}
          fontWeight={700}
          lineHeight='100%'
          letterSpacing='-3px'
          fontFamily='monospace'
          opacity={hovered ? 0.15 : 0.06}
          transition='opacity 0.4s'
        >
          {service.id}
        </Text>

        <MotionBox
          w='36px'
          h='36px'
          borderRadius='full'
          border='1px solid'
          borderColor='rgba(255,255,255,0.15)'
          display='flex'
          alignItems='center'
          justifyContent='center'
          animate={{
            rotate: hovered ? 0 : -45,
            borderColor: hovered ? 'var(--orange)' : 'rgba(255,255,255,0.15)',
            color: hovered ? 'var(--orange)' : 'rgba(255,255,255,0.4)',
          }}
          transition={{ duration: 0.35, ease: easing }}
        >
          <LuArrowUpRight size={16} />
        </MotionBox>
      </HStack>

      {/* Bottom: title + description */}
      <VStack align='flex-start' gap={{ base: '8px', md: '12px' }}>
        <MotionText
          fontSize={{ base: '20px', md: '24px', lg: '28px' }}
          fontWeight={600}
          letterSpacing={{ base: '-0.3px', md: '-0.8px' }}
          lineHeight='115%'
          textTransform='uppercase'
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.35, ease: easing }}
        >
          {service.title}
        </MotionText>

        <Text
          fontSize={{ base: '13px', md: '14px' }}
          fontWeight={400}
          opacity={0.35}
          lineHeight='160%'
          maxW='320px'
        >
          {service.description}
        </Text>
      </VStack>

      {/* Accent line on hover */}
      <MotionBox
        position='absolute'
        bottom={0}
        left={0}
        h='2px'
        bg='var(--orange)'
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.5, ease: easing }}
      />
    </MotionBox>
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
      <SectionLabel label='/ SERVICES' number='02' />
      <MotionBox
        w='100%'
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: '16px', md: '20px' }}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </MotionBox>
    </VStack>
  )
}

export default Services
