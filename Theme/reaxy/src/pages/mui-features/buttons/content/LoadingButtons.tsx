import * as React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import SaveIcon from '@mui/icons-material/Save'
import SendIcon from '@mui/icons-material/Send'
import { MuiCard } from "@config/components";
import { styles } from './All.styles'
import { useTheme } from '@mui/material'

export function LoadingButtons() {
  // ** useState
  const [loading, setLoading] = React.useState(false)

  // ** function
  function handleClick() {
    setLoading(true)
  }
  // ** styles
  const theme = useTheme()
  const style = styles(theme)
  return (
    <MuiCard title="Loading buttons & size">
      <Box>
        <FormControlLabel
          sx={{
            display: 'block',
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />
        <Box sx={{ ...style.container, '& > button': { m: 2 } }}>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            sx={style.disabled}
            disabled
          >
            {loading ? '' : 'disabled'}
          </LoadingButton>
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
            sx={style.primary}
          >
            Fetch data
          </LoadingButton>
          <LoadingButton
            size="small"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={style.primary}
          >
            Send
          </LoadingButton>
          <LoadingButton
            size="small"
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            sx={style.secondary}
          >
            Save
          </LoadingButton>
        </Box>
        <Box sx={{ ...style.container, '& > button': { m: 2 } }}>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            sx={style.disabled}
            disabled
          >
            {loading ? '' : 'disabled'}
          </LoadingButton>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
            sx={style.secondary}
          >
            Fetch data
          </LoadingButton>
          <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={style.secondary}
          >
            Send
          </LoadingButton>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            sx={style.primary}
          >
            Save
          </LoadingButton>
        </Box>
        <Box sx={{ ...style.container, '& > button': { m: 2 } }}>
          <LoadingButton
            size="large"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
            sx={style.disabled}
          >
            {loading ? '' : 'disabled'}
          </LoadingButton>
          <LoadingButton
            size="large"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Fetch data
          </LoadingButton>
          <LoadingButton
            size="large"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </LoadingButton>
          <LoadingButton
            size="large"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </Box>
      </Box>
    </MuiCard>
  )
}
