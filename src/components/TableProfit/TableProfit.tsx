import { Box, Table, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { FC, useState } from "react";
import useNumberFormat from "./../../hooks/useNumberFormat";
import { IMoySklad } from "./../../util/interfaces/moysklad.interface";
import EnhancedTableHead from "./EnhancedTableHead";
import { Order, TMoySklad } from "./TableProfit.interface";
import {
  getColorStatus,
  getComparator,
  stableSort,
} from "./TableProfit.services";

const TableProfit: FC<{ rows: IMoySklad[] }> = ({ rows }) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<TMoySklad>("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const numberFormat = useNumberFormat();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: TMoySklad
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row._id}>
                      <TableCell scope="row">{row.name}</TableCell>
                      <TableCell align="center">
                        <div
                          className={`text-white px-2 py-[2px] ${getColorStatus(
                            row.stateName
                          )}`}
                        >
                          {row.stateName}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {numberFormat(row.sumMonth5 || 0)}
                      </TableCell>
                      <TableCell align="right">
                        {numberFormat(row.sumMonth4 || 0)}
                      </TableCell>
                      <TableCell align="right">
                        {numberFormat(row.sumMonth3 || 0)}
                      </TableCell>
                      <TableCell align="right">
                        {numberFormat(row.sumMonth2 || 0)}
                      </TableCell>
                      <TableCell align="right">
                        {numberFormat(row.sumMonth1 || 0)}
                      </TableCell>
                      <TableCell align="right">
                        <span
                          className={`font-bold ${
                            (row.sumMonth1 || 0) < row.sumMonth0 * 1.1
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {numberFormat(row.sumMonth0 || 0)}
                        </span>
                      </TableCell>
                      <TableCell align="right">{row.marginMonth0}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Строк на странице:"
        />
      </Paper>
    </Box>
  );
};

export default TableProfit;
