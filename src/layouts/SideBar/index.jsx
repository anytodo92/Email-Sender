import { useNavigate } from "react-router-dom"
import { Drawer, Box, Toolbar, Divider,
  List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import {
  SideBarWrapper
} from "./styled"

const SideBar = () => {
  const navigator = useNavigate()
  const navigate = (path) => {
    navigator(path)
  }
  return (
    <SideBarWrapper>
      <Box
        component="nav"
        sx={{ width: { sm: 200 }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/foundation')}>
                <ListItemText>Foundation</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/nonprofit')}>
                <ListItemText>Nonprofit</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/history')}>
                <ListItemText>History</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </SideBarWrapper>
  )
}

export default SideBar