import { useRouter } from 'next/router'
import { Box, Toolbar, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

import { routes } from 'common/routes'
import theme from 'common/theme'

const addIconStyles = {
  background: theme.palette.primary.light,
  borderRadius: '50%',
  cursor: 'pointer',
  padding: 1.2,
  boxShadow: 3,
}

export default function GridAppbar() {
  const router = useRouter()

  return (
    <Toolbar
      sx={{
        background: theme.palette.common.white,
        borderTop: '1px solid lightgrey',
        display: 'flex',
        justifyContent: 'space-between',
        height: '72px',
      }}>
      <Box sx={{ height: '64px', display: 'flex', alignItems: 'start', pt: 1 }}>
        <Typography>Всички градове</Typography>
      </Box>
      <Box sx={{ height: '64px', display: 'flex', alignItems: 'flex-end', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Добави">
            <AddIcon
              sx={addIconStyles}
              fontSize="large"
              onClick={() => {
                router.push(routes.admin.cities.create)
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </Toolbar>
  )
}
