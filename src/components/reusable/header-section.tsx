import { headingTextStyles } from '@/styles/comon-style'
import { HStack, Text } from '@chakra-ui/react'
import { CgAsterisk } from 'react-icons/cg'

const HeaderSection = ({
  label,
  number,
}: {
  label: string
  number: string
}) => {
  return (
    <HStack
      w={'100%'}
      borderTop={'1px solid rgb(48, 48, 48)'}
      justify={'space-between'}
      alignItems={'center'}
      p={'20px'}
    >
      <Text
        fontSize={'20px'}
        fontWeight={500}
        color={'#808080'}
        display={'flex'}
        alignItems={'center'}
        gap={'2px'}
      >
        <CgAsterisk color='var(--orange)' size={20} /> ({number})
      </Text>
      <Text {...headingTextStyles} fontSize={'18px'}>
        {label}
      </Text>
      <Text fontSize={'18px'} fontWeight={500} color={'#808080'}>
        © 2026
      </Text>
    </HStack>
  )
}

export default HeaderSection
