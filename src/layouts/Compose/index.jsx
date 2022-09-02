import TableToolbar from "../../components/TableToolbar"
import TableHeader from "../../components/TableHeader"
import FoundationModal from "../../modals/FoundationModal"
import FilterModal from "../../modals/FilterModal"

import { useState } from "react"
import { Grid, Typography, 
  TableContainer, Table, TableBody, TableCell, Checkbox, TableRow, 
  TablePagination, Autocomplete, TextField, IconButton,
  List, ListItem, ListItemText, ListItemButton, Tooltip } from "@mui/material"
import { Delete as DeleteIcon, Preview as PreviewIcon } from "@mui/icons-material"
import { ComposeWrapper, Row } from "./styled"
import { PerPageCountList } from "../../common/constants"

const Compose = () => {
  const [filterPopupOptions, setFilterPopupOptions] = useState({ opened: false })

  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [selected, setSelected] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'address',
      numeric: false,
      disablePadding: false,
      label: 'Address',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'func',
      numeric: false,
      disablePadding: false,
      label: '',
    },
  ]

  const isSelected = (id) => selected.indexOf(id) !== -1

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = nonprofitList.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClicked = (e, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const [selectedFoundation, setSelectedFoundation] = useState(null)
  const [selectedNonprofitList, setSelectedNonprofitList] = useState([])

  const foundationList = [
    { id: 1, email: 'cupcake@gmail.com', info: '-' },
    { id: 2, email: 'donut@gmail.com', info: '-' },
    { id: 3, email: 'eclair@gmail.com', info: '-' },
    { id: 4, email: 'frozen-yoghurt@gmail.com', info: '-' },
    { id: 5, email: 'gingerbread@gmail.com', info: '-' },
    { id: 6, email: 'honeycomb@gmail.com', info: '-' },
    { id: 7, email: 'ice-cream@gmail.com', info: '-' },
    { id: 8, email: 'jelly-bean@gmail.com', info: '-' },
    { id: 9, email: 'kitKat@gmail.com', info: '-' },
    { id: 10, email: 'lollipop@gmail.com', info: '-' },
    { id: 11, email: 'marshmallow@gmail.com', info: '-' },
    { id: 12, email: 'nougat@gmail.com', info: '-' }
  ];

  const nonprofitList = [
    { id: 1, name: 'Cupcake', address: 'Address of Cupcake', email: 'cupcake@gmail.com', info: '-'},
    { id: 2, name: 'Donut', address: 'Address of Donut', email: 'donut@hotmail.com', info: '-'},
    { id: 3, name: 'Eclair', address: 'Address of Eclair', email: 'eclair@yahoo.com', info: '-'},
    { id: 4, name: 'Frozen yoghurt', address: 'Address of Frozen', email: 'frozen@gmail.com', info: '-'},
    { id: 5, name: 'Gingerbread', address: 'Address of Gingerbread', email: 'gingerbread@gmail.com', info: '-'},
    { id: 6, name: 'Honeycomb', address: 'Address of Cupcake', email: 'honeycomb@gmail.com', info: '-'},
    { id: 7, name: 'Ice cream sandwich', address: 'Address of Cream', email: 'cream@hotmail.com', info: '-'},
    { id: 8, name: 'Jelly Bean', address: 'Address of Jelly', email: 'jelly@gmail.com', info: '-'},
    { id: 9, name: 'KitKat', address: 'Address of KitKat', email: 'kikat@yahoo.com', info: '-'},
    { id: 10, name: 'Lollipop', address: 'Address of Lollipop', email: 'lollipop@yahoo.com', info: '-'},
    { id: 11, name: 'Marshmallow', address: 'Address of Marshmallow', email: 'marshmallow@hotmail.com', info: '-'},
    { id: 12, name: 'Nougat', address: 'Address of Nougat', email: 'nougat@gmail.com', info: '-'}
  ];

  const getFoundationList = () => {
    const list = foundationList.map(v => { return { ...v, label: v.email } })
    return list
  }

  const changeFoundationData = (data) => {
    if (!data)
      return
    setSelectedFoundation(data)
  }

  const handleSearch = (keyword) => {

  }

  const showFilterPopup = () => {
    setFilterPopupOptions({ opened: true })
  }

  return (
    <>
      <ComposeWrapper>
        <Typography variant="h6" nowrap component="div">Compose</Typography>
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
            <Row marginTop={16}>
              <Autocomplete
                disablePortal
                id="sel-foundation"
                options={getFoundationList()}
                onChange={(e, v) => changeFoundationData(v)}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Eamil" variant="standard" />}
              />
            </Row>
            <Row>
              <List>
                <ListItem sx={{ paddingLeft: 1 }}>
                  <ListItemText 
                    primary={selectedFoundation ? selectedFoundation.email : "none"} 
                    secondary={selectedFoundation ? selectedFoundation.info : "-"}  />
                  {selectedFoundation&& 
                    <ListItemButton 
                      sx={{ flexGrow: 0 }}
                      onClick={() => setSelectedFoundation(null)}
                      ><DeleteIcon /></ListItemButton>
                  }
                </ListItem>
              </List>
            </Row>
          </Grid>
          <Grid item xs={8}>
            <Row marginTop={-16}>
              <TableToolbar 
                numSelected={selected.length}
                title="To (Nonprofit)"
                onFilterClick={showFilterPopup} />
              <TableContainer>
                <Table>
                  <TableHeader 
                    headCells={headCells}
                    numSelected={selected.length}
                    rowCount={nonprofitList.length}
                    onSelectAllClick={handleSelectAllClick} />
                  <TableBody>
                  { nonprofitList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `row-${index}`;
                    return (
                      <TableRow
                          hover
                          onClick={(event) => handleClicked(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            align="center"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.address}</TableCell>
                          <TableCell align="center">{row.email}</TableCell>
                          <TableCell align="center">
                            {isItemSelected&& 
                            <Tooltip title={`Sending money to nonprofit ${row.name} at address ${row.address}.`}>
                              <IconButton><PreviewIcon /></IconButton>
                            </Tooltip>
                            }
                          </TableCell>
                        </TableRow>
                    )
                  }) }
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={PerPageCountList}
                component="div"
                count={nonprofitList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Row>            
          </Grid>
        </Grid>
      </ComposeWrapper>
      <FilterModal opened={filterPopupOptions.opened}
        onOk={handleSearch}
        onCancel={() => setFilterPopupOptions({ opened: false })}/>
    </>
  )
}

export default Compose