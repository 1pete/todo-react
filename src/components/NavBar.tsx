import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ArrowIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useNavigate } from 'react-router'

type Props = {
  showAdd?: boolean
  showBack?: boolean
  title?: string
}

export default function NavBar({ showAdd, showBack, title }: Props) {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar>
        {showBack && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Back"
            sx={{ mr: 2 }}
            onClick={() => navigate(-1)}
          >
            <ArrowIcon />
          </IconButton>
        )}
        <Typography variant="h5" color="inherit" sx={{ flex: 1 }}>
          {title || 'To-Do List'}
        </Typography>
        {showAdd && (
          <Button color="inherit" onClick={() => navigate('/new')}>
            new item
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
