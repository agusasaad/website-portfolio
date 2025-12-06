'use client'

import { Button, ButtonProps, Box } from '@chakra-ui/react'
import React from 'react'

interface CustomButtonProps extends ButtonProps {
  label: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  ...rest
}) => {
  return (
    <Button
      size={{ base: 'sm', md: 'xl' }}
      minH={{ base: '40px', md: '48px' }}
      p={{ base: '0px 20px', md: '0px 24px' }}
      fontSize={{ base: '14px', md: '16px' }}
      fontWeight={600}
      color='#FFFFFF'
      bg='transparent'
      border='1.5px solid #FFFFFF'
      rounded='full'
      position='relative'
      overflow='hidden'
      _hover={{ color: 'white' }}
      {...rest}
      css={{
        _before: {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          rounded: 'full',
          bg: 'var(--orange)',
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
