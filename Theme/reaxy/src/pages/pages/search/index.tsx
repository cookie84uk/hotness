import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { useNavigate } from 'react-router-dom'
import { Typography, useTheme } from '@mui/material'
import { styles } from './Search.styles'
import { useAppSelector } from '@config/hooks'

export default function Search() {
  // ** redux
  const { vertical } = useAppSelector((state) => state.palette)
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const [dotsVisible, setDotsVisible] = React.useState(true)

  const navigate = useNavigate()

  const progressRef = React.useRef(() => {})
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
        navigate('/error')
        setDotsVisible(false)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
        setDotsVisible(true)
      }
    }
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 150)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // **styles
  const theme = useTheme()
  const style = styles(theme, { vertical })

  return (
    <Box sx={style.container}>
      <Box sx={style.loading_text}>
        <Box className="loader">
          <Typography component={'span'} variant="h4">
            Search results {dotsVisible && ' . . .'}
          </Typography>
        </Box>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
    </Box>
  )
}
