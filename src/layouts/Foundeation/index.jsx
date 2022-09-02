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

  function createData(id, name, info) {
    return {
      id,
      name,
      info
    };
  }

  const rows = [
    createData(1, 'Cupcake', '-'),
    createData(2, 'Donut', '-'),
    createData(3, 'Eclair', '-'),
    createData(4, 'Frozen yoghurt', '-'),
    createData(5, 'Gingerbread', '-'),
    createData(6, 'Honeycomb', '-'),
    createData(7, 'Ice cream sandwich', '-'),
    createData(8, 'Jelly Bean', '-'),
    createData(9, 'KitKat', '-'),
    createData(10, 'Lollipop', '-'),
    createData(11, 'Marshmallow', '-'),
    createData(12, 'Nougat', '-')
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

  return (
    <FoundationWrapper>
      <Typography variant="h6" nowrap component="div">Foundation</Typography>
      <Grid contianer 
        sx={{ pt: 2 }}>
        <Card sx={{ p: 2 }}>
          <TableToolbar numSelected={selected.length} />
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