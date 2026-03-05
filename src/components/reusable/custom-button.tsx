'use client'

import { Button, ButtonProps, Box } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../ui/color-mode'

interface CustomButtonProps extends ButtonProps {
  label: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  ...rest
}) => {
  const textColor = useColorModeValue('#0E0E0E', '#FFFFFF')
  const borderColor = useColorModeValue('#0E0E0E', '#FFFFFF')
  const hoverTextColor = useColorModeValue('#0E0E0E', '#FFFFFF')

  return (
    <Button
      size={{ base: 'sm', md: 'xl' }}
      minH={{ base: '40px', md: '48px' }}
      px={{ base: '20px', md: '24px' }}
      fontSize={{ base: '14px', md: '16px' }}
      fontWeight={600}
      color={textColor}
      bg='transparent'
      border='1.5px solid'
      borderColor={borderColor}
      rounded='full'
      position='relative'
      overflow='hidden'
      _hover={{ color: hoverTextColor }}
      {...rest}
      css={{
        _before: {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          borderRadius: '9999px',
          background: 'var(--orange)',
          zIndex: 0,
          transform: 'translateY(100%)',
          transition: 'transform 0.3s ease',
        },
        _hover: {
          _before: {
            transform: 'translateY(0%)',
          },
        },
      }}
    >
      <Box position='relative' zIndex={1}>
        {label}
      </Box>
    </Button>
  )
}
