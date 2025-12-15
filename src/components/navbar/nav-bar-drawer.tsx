'use client'

import { Box, Drawer, Portal, useDisclosure } from '@chakra-ui/react'
import NavBarDrawerHeader from './nav-bar-drawer-header'
import NavBarDrawerItems from './nav-bar-drawer-items'
import NavBarDrawerFooter from './nav-bar-drawer-footer'
import Noise from '../noise/noise'

const NavBarDrawer = () => {
  const { open, onOpen, onClose, setOpen } = useDisclosure()

  return (
    <Drawer.Root
      size='full'
      placement='bottom'
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
    >
      {/* -------------------------------------- */}
      {/*            TRIGGER DEL DRAWER           */}
      {/* -------------------------------------- */}
      <Drawer.Trigger asChild>
        <Box
          w={'45px'}
          h={'45px'}
          as='button'
          aria-label='menu'
          cursor='pointer'
          outline='none'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          onClick={onOpen}
          transition='transform 0.3s ease'
          _hover={{ transform: 'rotate(45deg)' }}
        >
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='2.77778' cy='2.77778' r='2.77778' fill='white' />
            <circle cx='2.77778' cy='22.2222' r='2.77778' fill='white' />
            <circle cx='22.2222' cy='2.77778' r='2.77778' fill='white' />
            <circle cx='22.2222' cy='22.2222' r='2.77778' fill='white' />
          </svg>
        </Box>
      </Drawer.Trigger>

      {/* -------------------------------------- */}
      {/*            CONTENIDO PRINCIPAL          */}
      {/* -------------------------------------- */}
      <Portal>
        {/* Fondo oscuro detrás del Drawer */}
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content
            position='relative'
            padding={{ base: '0px 24px', md: '0px 40px' }}
            bg={'#000'}
          >
            {/* ---------------- HEADER ---------------- */}
            {/* X de cerrar + info de cabecera */}
            <Drawer.Header>
              <NavBarDrawerHeader onClose={onClose} />
            </Drawer.Header>

            {/* ---------------- BODY ------------------ */}
            {/* Ítems del menú (animados) */}
            <Drawer.Body>
              <NavBarDrawerItems />
            </Drawer.Body>

            {/* ---------------- FOOTER ---------------- */}
            {/* Ubicación, redes, etc */}
            <Drawer.Footer>
              <NavBarDrawerFooter />
            </Drawer.Footer>

            {/* ---------------- NOISE ----------------- */}
            {/* Textura de ruido sutil */}
            <Noise
              patternSize={600}
              refreshInterval={2}
              tileSize={90}
              alpha={20}
            />
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default NavBarDrawer
