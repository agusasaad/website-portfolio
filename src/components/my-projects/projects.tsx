'use client'

import { projects } from '@/data/placeholder-data'
import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import SectionLabel from '../reusable/section-label'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing },
  },
}

const ProjectCard = ({
  project,
}: {
  project: {
    id: string
    title: string
    category: string
    year: string
    description: string
    img: string
    tags: string[]
  }
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <MotionBox
      variants={fadeUp}
      w='100%'
      h='100%'
      display='flex'
      flexDir='column'
      cursor='pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <MotionBox
        w='100%'
        flex='1'
        minH='180px'
        maxH={{ base: '260px', md: '340px', lg: '380px' }}
        borderRadius='8px'
        overflow='hidden'
        position='relative'
        mb='16px'
      >
        <MotionBox
          w='100%'
          h='100%'
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <Image
            src={project.img}
            alt={project.title}
            w='100%'
            h='100%'
            objectFit='cover'
          />
        </MotionBox>

        {/* Tags overlay */}
        <MotionBox
          position='absolute'
          bottom='0'
          left='0'
          right='0'
          p={{ base: '14px', md: '20px' }}
          bg='linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
          display='flex'
          gap='6px'
          flexWrap='wrap'
          alignItems='flex-end'
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.tags.map((tag) => (
            <Text
              key={tag}
              fontSize='12px'
              fontWeight={500}
              color='white'
              bg='rgba(255,255,255,0.12)'
              backdropFilter='blur(8px)'
              px='10px'
              py='4px'
              borderRadius='full'
            >
              {tag}
            </Text>
          ))}
        </MotionBox>

        {/* Arrow */}
        <MotionBox
          position='absolute'
          top={{ base: '12px', md: '16px' }}
          right={{ base: '12px', md: '16px' }}
          w='40px'
          h='40px'
          borderRadius='full'
          bg='white'
          color='black'
          display='flex'
          alignItems='center'
          justifyContent='center'
          animate={{
            scale: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <LuArrowUpRight size={18} />
        </MotionBox>
      </MotionBox>

      {/* Info */}
      <HStack w='100%' justify='space-between' align='baseline' gap='12px'>
        <HStack gap='16px' align='baseline'>
          <Text
            fontSize='13px'
            fontWeight={500}
            color='var(--orange)'
            fontFamily='monospace'
            opacity={0.6}
          >
            {project.id}
          </Text>
          <MotionText
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight={600}
            lineHeight='120%'
            letterSpacing='-0.3px'
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.4, ease: easing }}
          >
            {project.title}
          </MotionText>
        </HStack>

        <HStack gap='16px' flexShrink={0}>
          <Text
            fontSize='13px'
            fontWeight={400}
            opacity={0.3}
            display={{ base: 'none', md: 'block' }}
          >
            {project.category}
          </Text>
          <Text fontSize='13px' fontWeight={500} opacity={0.3}>
            {project.year}
          </Text>
        </HStack>
      </HStack>
    </MotionBox>
  )
}

const Works = () => {
  const rows: { project: (typeof projects)[0] }[][] = []
  for (let i = 0; i < projects.length; i += 2) {
    const pair: { project: (typeof projects)[0] }[] = []
    if (projects[i]) pair.push({ project: projects[i] })
    if (projects[i + 1]) pair.push({ project: projects[i + 1] })
    rows.push(pair)
  }

  const isEvenRow = (idx: number) => idx % 2 === 0

  return (
    <VStack as='section' w='100%' gap={{ base: '32px', md: '48px' }}>
      <SectionLabel label='/ WORKS' number='01' />
      <VStack w='100%' gap={{ base: '48px', md: '72px' }}>
        {rows.map((row, rowIdx) => (
          <MotionBox
            key={rowIdx}
            w='100%'
            display='grid'
            gridTemplateColumns={{
              base: '1fr',
              lg:
                row.length === 2
                  ? isEvenRow(rowIdx)
                    ? '1.4fr 1fr'
                    : '1fr 1.4fr'
                  : '1fr',
            }}
            gap={{ base: '40px', md: '32px' }}
            alignItems='stretch'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.15 }}
          >
            {row.map(({ project }) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </MotionBox>
        ))}
      </VStack>
    </VStack>
  )
}

export default Works
