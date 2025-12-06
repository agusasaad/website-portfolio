'use client'

import { Box, Drawer, Portal, useDisclosure } from '@chakra-ui/react'
import NavBarDrawerHeader from './nav-bar-drawer-header'
import NavBarDrawerItems from './nav-bar-drawer-items'
import NavBarDrawerFooter from './nav-bar-drawer-footer'
import Noise from '../noise/noise'
import { CgMenuGridO } from 'react-icons/cg'

const NavBarDrawer = () => {
  const { open, onOpen, onClose, setOpen } = useDisclosure()

  return (
    <Drawer.Root
      size='full'
      placement='bottom'
      open={open}
      onOpenChange={(details) => setOpen(details.open)} // sincroniza cambios externos
    >
      {/* -------------------------------------- */}
      {/*            TRIGGER DEL DRAWER           */}
      {/* -------------------------------------- */}
      <Drawer.Trigger asChild>
        <Box
          as='button'
          aria-label='menu'
          cursor='pointer'
          outline='none'
          onClick={onOpen}
          transition='transform 0.3s ease'
          _hover={{ transform: 'rotate(45deg)' }}
        >
          <CgMenuGridO size={35} />
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
            <Noise />
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default NavBarDrawer
