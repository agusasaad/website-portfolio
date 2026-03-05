'use client'

import { technologies } from '@/data/placeholder-data'
import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import image_profile from '@/assets/image-profile.png'
import { SlideUpItem } from '../reusable/slide-up-Item'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay },
  }),
}

const stats = [
  { number: '+3', label: 'Years of Experience' },
  { number: '+15', label: 'Projects Completed' },
  { number: '+8', label: 'Happy Clients' },
]

const HomePage = () => {
  const duplicatedTech = [...technologies, ...technologies, ...technologies]

  return (
    <VStack as='section' w='100%' py={{ base: '40px', md: '80px' }} gap={0}>
      {/* Editorial heading with inline photo */}
      <Box w='100%' pb={{ base: '40px', md: '56px' }}>
        <SlideUpItem delay={1.3}>
          <Text
            fontSize={{
              base: '36px',
              sm: '48px',
              md: '60px',
              lg: '76px',
              xl: '88px',
            }}
            fontWeight={650}
            lineHeight='110%'
            letterSpacing={{ base: '-1px', md: '-3px' }}
            textTransform='uppercase'
          >
            I build{' '}
            <Box
              as='span'
              display='inline-flex'
              verticalAlign='middle'
              w={{
                base: '48px',
                sm: '60px',
                md: '76px',
                lg: '90px',
                xl: '100px',
              }}
              h={{
                base: '48px',
                sm: '60px',
                md: '76px',
                lg: '90px',
                xl: '100px',
              }}
              borderRadius='full'
              overflow='hidden'
              mx={{ base: '4px', md: '8px' }}
              position='relative'
              top={{ base: '-2px', md: '-4px' }}
            >
              <Image
                src={image_profile.src}
                alt='Agustin Asaad'
                w='100%'
                h='100%'
                objectFit='cover'
              />
            </Box>{' '}
            digital
            <br />
            experiences{' '}
            <Box as='span' color='var(--orange)'>
              that
            </Box>
            <br />
            <Box as='span' color='var(--orange)'>
              feel alive
            </Box>
          </Text>
        </SlideUpItem>
      </Box>

      {/* Tech marquee ticker */}
      <Box
        w='100vw'
        ml='calc(-50vw + 50%)'
        overflow='hidden'
        borderTop='1px solid'
        borderBottom='1px solid'
        borderColor='rgba(255,255,255,0.07)'
        py={{ base: '14px', md: '18px' }}
      >
        <motion.div
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedTech.map((tech, i) => (
            <HStack
              key={i}
              gap={{ base: '20px', md: '32px' }}
              mr={{ base: '20px', md: '32px' }}
              flexShrink={0}
            >
              <Text
                fontSize={{ base: '14px', md: '16px' }}
                fontWeight={500}
                opacity={0.5}
                whiteSpace='nowrap'
                textTransform='uppercase'
                letterSpacing='2px'
              >
                {tech}
              </Text>
              <Box
                w='4px'
                h='4px'
                borderRadius='full'
                bg='var(--orange)'
                flexShrink={0}
              />
            </HStack>
          ))}
        </motion.div>
      </Box>

      {/* Bio + Stats row */}
      <Box
        w='100%'
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: '32px', md: '64px' }}
        pt={{ base: '40px', md: '56px' }}
      >
        {/* Left: Bio */}
        <MotionVStack
          align='flex-start'
          gap='20px'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          custom={0.15}
          variants={fadeUp}
        >
          <Text
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight={400}
            lineHeight='180%'
            opacity={0.5}
          >
            I&apos;m a Front-end Developer passionate about building clean,
            performant, and visually engaging web applications. I specialize in
            React, Next.js, and motion design — turning ideas into polished
            interfaces that users love to interact with.
          </Text>

          <HStack gap='8px'>
            <Box w='6px' h='6px' borderRadius='full' bg='#4ade80' />
            <Text fontSize='14px' fontWeight={450} opacity={0.4}>
              Based in Cordoba, Argentina
            </Text>
          </HStack>
        </MotionVStack>

        {/* Right: Stats */}
        <MotionBox
          display='flex'
          flexDir='column'
          gap={0}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          custom={0.25}
          variants={fadeUp}
        >
          {stats.map((stat, i) => (
            <HStack
              key={stat.label}
              w='100%'
              justify='space-between'
              align='baseline'
              py={{ base: '20px', md: '24px' }}
              borderBottom='1px solid'
              borderTop={i === 0 ? '1px solid' : 'none'}
              borderColor='rgba(255,255,255,0.07)'
            >
              <Text
                fontSize={{ base: '40px', md: '56px' }}
                fontWeight={700}
                lineHeight='100%'
                color='var(--orange)'
                letterSpacing='-2px'
              >
                {stat.number}
              </Text>
              <Text
                fontSize={{ base: '13px', md: '14px' }}
                fontWeight={450}
                opacity={0.4}
                textTransform='uppercase'
                letterSpacing='1px'
              >
                {stat.label}
              </Text>
            </HStack>
          ))}
        </MotionBox>
      </Box>
    </VStack>
  )
}

export default HomePage
