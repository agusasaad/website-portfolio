'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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
    transition: { staggerChildren: 0.08 },
  },
}

const faqs = [
  {
    question: 'What technologies do you work with?',
    answer:
      'I primarily work with React, Next.js, TypeScript, and modern CSS frameworks like Chakra UI. For animations, I use Framer Motion and GSAP to create smooth, interactive experiences.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary depending on scope, but a typical landing page takes 2-3 weeks, while larger web applications can take 4-8 weeks. I always provide a detailed timeline before starting.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes! I work with clients worldwide. I\'m based in Argentina (GMT-3) and have experience collaborating across different time zones with clear communication and async workflows.',
  },
  {
    question: 'What does your process look like?',
    answer:
      'I follow a structured approach: Discovery (understanding your goals), Design (wireframes & visual direction), Development (building with clean code), and Launch (testing & deployment). You\'re involved at every stage.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Absolutely. I offer post-launch support packages that include bug fixes, performance monitoring, and feature updates to keep your project running smoothly.',
  },
]

const FaqItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <MotionBox
      variants={fadeUp}
      w='100%'
      borderBottom='1px solid'
      borderColor='rgba(255,255,255,0.07)'
      cursor='pointer'
      onClick={onToggle}
    >
      <HStack
        w='100%'
        justify='space-between'
        align='center'
        py={{ base: '20px', md: '28px' }}
        gap='20px'
      >
        <Text
          fontSize={{ base: '16px', md: '18px', lg: '20px' }}
          fontWeight={500}
          letterSpacing='-0.3px'
          opacity={isOpen ? 1 : 0.7}
          transition='opacity 0.3s'
        >
          {faq.question}
        </Text>

        <MotionBox
          w='32px'
          h='32px'
          borderRadius='full'
          border='1px solid'
          borderColor={isOpen ? 'var(--orange)' : 'rgba(255,255,255,0.12)'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexShrink={0}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easing }}
        >
          <Text
            fontSize='18px'
            fontWeight={300}
            lineHeight='100%'
            color={isOpen ? 'var(--orange)' : 'inherit'}
            opacity={isOpen ? 1 : 0.4}
            transition='color 0.3s, opacity 0.3s'
          >
            +
          </Text>
        </MotionBox>
      </HStack>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easing }}
            style={{ overflow: 'hidden' }}
          >
            <Text
              fontSize={{ base: '14px', md: '15px' }}
              fontWeight={400}
              opacity={0.4}
              lineHeight='175%'
              pb={{ base: '20px', md: '28px' }}
              maxW='640px'
            >
              {faq.answer}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionBox>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <VStack
      as='section'
      w='100%'
      py={{ base: '50px', md: '80px' }}
      gap={{ base: '32px', md: '48px' }}
    >
      <SectionLabel label='FAQ' number='04' />

      <MotionBox
        w='100%'
        display='flex'
        flexDir='column'
        borderTop='1px solid'
        borderColor='rgba(255,255,255,0.07)'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
      >
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </MotionBox>
    </VStack>
  )
}

export default Faq
