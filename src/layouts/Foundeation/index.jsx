import TableToolbar from "../../components/TableToolbar"
import TableHeader from "../../components/TableHeader"

import { useState } from "react"
import { Grid, Card, Typography, 
  TableContainer, Table, TableBody, TableCell, Checkbox, TableRow, 
  Paper, TablePagination } from "@mui/material"
import { FoundationWrapper } from "./styled"

const Foundation = () => {
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
      id: 'information',
      numeric: false,
      disablePadding: false,
      label: 'Infomation',
    },
  ]

  function createData( name, info) {
    return {
      name,
      info
    };
  }

  const rows = [
    createData('Cupcake', '-'),
    createData('Donut', '-'),
    createData('Eclair', '-'),
    createData('Frozen yoghurt', '-'),
    createData('Gingerbread', '-'),
    createData('Honeycomb', '-'),
    createData('Ice cream sandwich', '-'),
    createData('Jelly Bean', '-'),
    createData('KitKat', '-'),
    createData('Lollipop', '-'),
    createData('Marshmallow', '-'),
    createData('Nougat', '-')
  ];


  const isSelected = (name) => selected.indexOf(name) !== -1

  const handleClicked = (event, rowName) => {

  }

  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () => {

  }

  return (
    <FoundationWrapper>
      <Typography variant="h6" nowrap component="div">Foundation</Typography>
      <Grid contianer 
        sx={{ pt: 2 }}>
        <Card sx={{ p: 2 }}>
          <TableToolbar numSelected={0} />
          <Paper>
            <TableContainer>
              <Table>
                <TableHeader headCells={headCells} />
                <TableBody>
                { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                        hover
                        onClick={(event) => handleClicked(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
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
                        <TableCell align="center">{row.info}</TableCell>
                      </TableRow>
                  )
                }) }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
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
  )
}

export default Foundation