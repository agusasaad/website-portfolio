'use client'

import { Box, Drawer, HStack, Portal, Text, useDisclosure } from '@chakra-ui/react'
import NavBarDrawerHeader from './nav-bar-drawer-header'
import NavBarDrawerItems from './nav-bar-drawer-items'
import NavBarDrawerFooter from './nav-bar-drawer-footer'

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
          as='button'
          aria-label='menu'
          cursor='pointer'
          outline='none'
          onClick={onOpen}
        >
          <HStack
            gap='8px'
            align='center'
            opacity={0.5}
            transition='opacity 0.2s'
            _hover={{ opacity: 1 }}
          >
            <Text
              fontSize={{ base: '14px', md: '15px' }}
              fontWeight={500}
              textTransform='uppercase'
              letterSpacing='1.5px'
            >
              Menu
            </Text>
            <Box
              w='6px'
              h='6px'
              borderRadius='full'
              bg='var(--orange)'
            />
          </HStack>
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
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default NavBarDrawer
