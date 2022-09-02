import TableToolbar from "../../components/TableToolbar"
import TableHeader from "../../components/TableHeader"
import FoundationModal from "../../modals/FoundationModal"
import FilterModal from "../../modals/FilterModal"

import { useState } from "react"
import { Grid, Card, Typography, 
  TableContainer, Table, TableBody, TableCell, Checkbox, TableRow, 
  Paper, TablePagination } from "@mui/material"
import { FoundationWrapper } from "./styled"
import { PerPageCountList } from "../../common/constants"

const Foundation = () => {
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [selected, setSelected] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filterPopupOptions, setFilterPopupOptions] = useState({ opened: false })
  const [foundationPopupOptions, setFoundationPopupOptions] = useState({ opened: false })

  const headCells = [
    {
      id: 'email',
      numeric: false,
      disablePadding: true,
      label: 'Email',
    },
    {
      id: 'information',
      numeric: false,
      disablePadding: false,
      label: 'Infomation',
    },
  ]

  function createData(id, email, info) {
    return {
      id,
      email,
      info
    };
  }

  const rows = [
    createData(1, 'cupcake@gmail.com', '-'),
    createData(2, 'donut@gmail.com', '-'),
    createData(3, 'eclair@gmail.com', '-'),
    createData(4, 'frozen-yoghurt@gmail.com', '-'),
    createData(5, 'gingerbread@gmail.com', '-'),
    createData(6, 'honeycomb@gmail.com', '-'),
    createData(7, 'ice-cream@gmail.com', '-'),
    createData(8, 'jelly-bean@gmail.com', '-'),
    createData(9, 'kitKat@gmail.com', '-'),
    createData(10, 'lollipop@gmail.com', '-'),
    createData(11, 'marshmallow@gmail.com', '-'),
    createData(12, 'nougat@gmail.com', '-')
  ];


  const isSelected = (id) => selected.indexOf(id) !== -1

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
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

  const showFilterPopup = () => {
    setFilterPopupOptions({ opened: true })
  }
  
  const showFoundationPopup = () => {
    setFoundationPopupOptions({ opened: true })
  }

  const handleSearch = (keyword) => {

  }

  const handleSave = (data) => {

  }

  return (
    <>
      <FoundationWrapper>
        <Typography variant="h6" nowrap component="div">Foundation</Typography>
        <Grid contianer 
          sx={{ pt: 2 }}>
          <Card sx={{ p: 2 }}>
            <TableToolbar 
              numSelected={selected.length}
              onFilterClick={showFilterPopup}
              onAddClick={showFoundationPopup} />
            <Paper>
              <TableContainer>
                <Table>
                  <TableHeader 
                    headCells={headCells} 
                    numSelected={selected.length} 
                    rowCount={rows.length}
                    onSelectAllClick={handleSelectAllClick} />
                  <TableBody>
                  { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `row-${index}`;
                    return (
                      <TableRow
                          hover
                          onClick={(e) => handleClicked(e, row.id)}
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
                            {row.email}
                          </TableCell>
                          <TableCell align="center">{row.info}</TableCell>
                        </TableRow>
                    )
                  }) }
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={PerPageCountList}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Card>
        </Grid>
      </FoundationWrapper>
      <FilterModal opened={filterPopupOptions.opened} 
        onOk={handleSearch} 
        onCancel={() => setFilterPopupOptions({ opened: false })} />
      <FoundationModal opened={foundationPopupOptions.opened}
        onOk={handleSave}
        onCancel={() => setFoundationPopupOptions({ opened: false })} />
    </>
  )
}

export default Foundation