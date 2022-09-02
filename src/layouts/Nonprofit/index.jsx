import TableToolbar from "../../components/TableToolbar"
import TableHeader from "../../components/TableHeader"
import NonprofitModal from "../../modals/NonprofitModal"
import FilterModal from "../../modals/FilterModal"

import { useState } from "react"
import { Grid, Card, Typography, 
  TableContainer, Table, TableBody, TableCell, Checkbox, TableRow, 
  Paper, TablePagination } from "@mui/material"
import { NonProfitWrapper } from "./styled"
import { PerPageCountList } from "../../common/constants"

const NonProfit = () => {
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [selected, setSelected] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const [filterPopupOptions, setFilterPopupOptions] = useState({ opened: false })
  const [nonprofitPopupOptions, setNonprofitPopupOptions] = useState({ opened: false })

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
      id: 'information',
      numeric: false,
      disablePadding: false,
      label: 'Infomation',
    },
  ]

  function createData(id, name, address, email, info) {
    return {
      id,
      name,
      address,
      email,
      info
    };
  }

  const rows = [
    createData(1, 'Cupcake', 'Address of Cupcake', 'cupcake@gmail.com', '-'),
    createData(2, 'Donut', 'Address of Donut', 'donut@hotmail.com', '-'),
    createData(3, 'Eclair', 'Address of Eclair', 'eclair@yahoo.com', '-'),
    createData(4, 'Frozen yoghurt', 'Address of Frozen', 'frozen@gmail.com', '-'),
    createData(5, 'Gingerbread', 'Address of Gingerbread', 'gingerbread@gmail.com', '-'),
    createData(6, 'Honeycomb', 'Address of Cupcake', 'cupcake@gmail.com', '-'),
    createData(7, 'Ice cream sandwich', 'Address of Cream', 'cream@hotmail.com', '-'),
    createData(8, 'Jelly Bean', 'Address of Jelly', 'jelly@gmail.com', '-'),
    createData(9, 'KitKat', 'Address of KitKat', 'kikat@yahoo.com', '-'),
    createData(10, 'Lollipop', 'Address of Lollipop', 'lollipop@yahoo.com', '-'),
    createData(11, 'Marshmallow', 'Address of Marshmallow', 'marshmallow@hotmail.com', '-'),
    createData(12, 'Nougat', 'Address of Nougat', 'nougat@gmail.com', '-')
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
  
  const showNonprofitPopup = () => {
    setNonprofitPopupOptions({ opened: true })
  }

  const handleSearch = (keyword) => {

  }

  const handleSave = (data) => {
    
  }


  return (
    <>
      <NonProfitWrapper>
        <Typography variant="h6" nowrap component="div">Nonprofit</Typography>
        <Grid contianer 
          sx={{ pt: 2 }}>
          <Card sx={{ p: 2 }}>
            <TableToolbar 
              numSelected={selected.length}
              onFilterClick={showFilterPopup}
              onAddClick={showNonprofitPopup} />
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
      </NonProfitWrapper>
      <FilterModal opened={filterPopupOptions.opened}
        onOk={handleSearch}
        onCancel={() => setFilterPopupOptions({ opened: false })}/>
      <NonprofitModal opened={nonprofitPopupOptions.opened}
        onOk={handleSave}
        onCancel={() => setNonprofitPopupOptions({ opened: false })} />
    </>
    
  )
}

export default NonProfit