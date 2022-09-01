import TableToolbar from "../../components/TableToolbar"
import TableHeader from "../../components/TableHeader"

import { useState } from "react"
import { Grid, Card, Typography, 
  TableContainer, Table, TableBody, TableCell, Checkbox, TableRow, 
  Paper, TablePagination } from "@mui/material"
import { HistoryWrapper} from "./styled"

const History = () => {
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
      id: 'information',
      numeric: false,
      disablePadding: false,
      label: 'Infomation',
    },
  ]

  function createData( name, address, email, info) {
    return {
      name,
      address,
      email,
      info
    };
  }

  const rows = [
    createData('Cupcake', 'Address of Cupcake', 'cupcake@gmail.com', '-'),
    createData('Donut', 'Address of Donut', 'donut@hotmail.com', '-'),
    createData('Eclair', 'Address of Eclair', 'eclair@yahoo.com', '-'),
    createData('Frozen yoghurt', 'Address of Frozen', 'frozen@gmail.com', '-'),
    createData('Gingerbread', 'Address of Gingerbread', 'gingerbread@gmail.com', '-'),
    createData('Honeycomb', 'Address of Cupcake', 'cupcake@gmail.com', '-'),
    createData('Ice cream sandwich', 'Address of Cream', 'cream@hotmail.com', '-'),
    createData('Jelly Bean', 'Address of Jelly', 'jelly@gmail.com', '-'),
    createData('KitKat', 'Address of KitKat', 'kikat@yahoo.com', '-'),
    createData('Lollipop', 'Address of Lollipop', 'lollipop@yahoo.com', '-'),
    createData('Marshmallow', 'Address of Marshmallow', 'marshmallow@hotmail.com', '-'),
    createData('Nougat', 'Address of Nougat', 'nougat@gmail.com', '-')
  ];

  const isSelected = (name) => selected.indexOf(name) !== -1

  const handleClicked = (event, rowName) => {

  }

  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () => {

  }

  return (
    <HistoryWrapper>
      <Typography variant="h6" nowrap component="div">History</Typography>
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
    </HistoryWrapper>
  )
}

export default History