'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const ReusableDateTime = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Argentina/Buenos_Aires',
      })

      setTime(formatter.format(now))
    }

    updateTime()

    const timerId = setInterval(updateTime, 1000)

    return () => clearInterval(timerId)
  }, [])

  return <Box as='span'>[ {time} ]</Box>
}

export default ReusableDateTime
