'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionLabel from '../reusable/section-label'

const MotionBox = motion(Box)

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
    transition: { staggerChildren: 0.15 },
  },
}

const testimonials = [
  {
    quote:
      'Agustin delivered a website that exceeded our expectations. His attention to detail and ability to translate our vision into a polished product was impressive.',
    name: 'Martin Zurita',
    role: 'CEO, Grupo Zurita',
  },
  {
    quote:
      'Working with Agustin was a seamless experience. He understood exactly what we needed and delivered ahead of schedule with exceptional quality.',
    name: 'Lucas Fernandez',
    role: 'Founder, Posada Mawida',
  },
  {
    quote:
      'His technical skills combined with a strong design sensibility make him stand out. The animations and interactions he built elevated the entire project.',
    name: 'Sofia Martinez',
    role: 'Product Manager, Drivers',
  },
]

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) => {
  return (
    <MotionBox
      variants={fadeUp}
      w='100%'
      p={{ base: '28px', md: '36px', lg: '44px' }}
      border='1px solid'
      borderColor='rgba(255,255,255,0.07)'
      borderRadius='8px'
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      gap={{ base: '28px', md: '40px' }}
    >
      {/* Quote mark */}
      <Text
        fontSize={{ base: '48px', md: '60px' }}
        fontWeight={700}
        lineHeight='80%'
        color='var(--orange)'
        opacity={0.3}
        fontFamily='serif'
      >
        &ldquo;
      </Text>

      {/* Quote text */}
      <Text
        fontSize={{ base: '16px', md: '18px', lg: '20px' }}
        fontWeight={400}
        lineHeight='170%'
        opacity={0.6}
        letterSpacing='-0.2px'
      >
        {testimonial.quote}
      </Text>

      {/* Author */}
      <HStack gap='12px' align='center'>
        <Box
          w='3px'
          h='32px'
          bg='var(--orange)'
          borderRadius='full'
          opacity={0.5}
        />
        <VStack align='flex-start' gap='2px'>
          <Text fontSize='14px' fontWeight={600} letterSpacing='-0.2px'>
            {testimonial.name}
          </Text>
          <Text fontSize='12px' fontWeight={400} opacity={0.35}>
            {testimonial.role}
          </Text>
        </VStack>
      </HStack>
    </MotionBox>
  )
}

const Testimonials = () => {
  return (
    <VStack
      as='section'
      w='100%'
      py={{ base: '50px', md: '80px ' }}
      gap={{ base: '32px', md: '48px' }}
    >
      <SectionLabel label='TESTIMONIALS' number='03' />

      <MotionBox
        w='100%'
        display='grid'
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
        gap={{ base: '16px', md: '20px' }}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            index={i}
          />
        ))}
      </MotionBox>
    </VStack>
  )
}

export default Testimonials
