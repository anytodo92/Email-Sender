import { 
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  FilterList as FilterListIcon
} from "@mui/icons-material"

import { useState } from "react"
import { Toolbar, Typography, Tooltip,
  IconButton, Popover, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"

import { alpha } from "@mui/material/styles"
import { MoreOptionWrapper } from "./styled"

const TableToolbar = (props) => {
  const { numSelected } = props;

  const [morePopupOptions, setMorePopupOptions] = useState({ opened: false, anchorEl: null })

  const moreOption = (e) => {
    setMorePopupOptions({ opened: true, anchorEl: e.currentTarget })
  }

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            List
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="More Optioins">
            <IconButton onClick={moreOption}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <Popover
        open={morePopupOptions.opened}
        anchorEl={morePopupOptions.anchorEl}
        onClose={() => setMorePopupOptions({ opened: false, anchorEl: null })}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <MoreOptionWrapper>
          <List>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 50 }}><AddIcon /></ListItemIcon>
              <ListItemText>Add</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 50 }}><FilterListIcon /></ListItemIcon>
              <ListItemText>Filter</ListItemText>
            </ListItemButton>
          </List>
        </MoreOptionWrapper>  
      </Popover>
    </>
  );
};

export default TableToolbar