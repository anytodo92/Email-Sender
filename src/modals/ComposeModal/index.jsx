import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, List, ListItem,  
  Divider, ListItemText, Grid } from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"
import {
  Row
} from "./styled"

const ComposeModal = (props) => {
  const { opened, onOk, onCancel } = props

  return (
    <Dialog 
      open={opened} 
      onClose={onCancel}
      fullWidth
      maxWidth="xl">
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onCancel}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Compose Box
          </Typography>
          <Button autoFocus color="inherit" 
            sx={{ textTransform: 'capitalize' }} 
            onClick={onCancel}>
            Send
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container
        sx={{
          marginLeft: 0,
          marginTop: 0,
          width: '100%'
        }} 
        spacing={2}>
        <Grid item xs={4}>
          <Row>
            <Typography variant="h6" nowrap component="div">From (Foundation)</Typography>
          </Row>
          <List>
            <ListItem >
              <ListItemText primary="cukila@gmail.com" secondary="This is foundation for nonprofit." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          <Row>
            <Typography variant="h6" nowrap component="div">To (Nonprofit)</Typography>
          </Row>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      
    </Dialog>
  )
}

export default ComposeModal