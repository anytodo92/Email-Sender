import { useState } from 'react'
import { Dialog, DialogTitle, 
  DialogContent, DialogActions, Button, TextField } from "@mui/material"
import {
  Row
} from "./styled"

const NonprofitModal = (props) => {
  const { opened, onOk, onCancel } = props
  const [data, setData] = useState({ name: '', address: '', email: '', info: '' })
  return (
    <Dialog 
      open={opened} 
      onClose={onCancel}
      fullWidth={true}
      maxWidth="xs" >
      <DialogTitle>Nonprofit Info</DialogTitle>
      <DialogContent>
        <Row>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={data.name}
          />
        </Row>
        <Row>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </Row>
        <Row>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </Row>
        <Row>
          <TextField
            autoFocus
            margin="dense"
            id="info"
            label="Information"
            type="text"
            fullWidth
            variant="standard"
          />
        </Row>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} sx={{ textTransform: 'capitalize' }}>Cancel</Button>
        <Button onClick={onOk} sx={{ textTransform: 'capitalize' }}>Okay</Button>
      </DialogActions>
    </Dialog>
  )
}

export default NonprofitModal