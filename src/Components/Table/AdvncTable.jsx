"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function TableData() {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (url) => {
    const req = await fetch(url);
    const data = await req.json();
    setRows(data.users);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchData("https://dummyjson.com/users");
  }, []);

  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {
      fetchData("https://dummyjson.com/users");
    }
  }, [rowdata]);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="m-auto mt-10 p-5"
      >
        <div className="w-full md:w-fit flex items-center justify-between mb-4 border rounded px-2 py-2">
          <input
            type="text"
            placeholder="Search..."
            className=" outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <BiSearch className="ml-2 text-gray-500 cursor-pointer" />
        </div>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className="font-bold">
                  ID
                </TableCell>
                <TableCell align="center" className="font-bold">
                  First Name
                </TableCell>
                <TableCell align="center" className="font-bold">
                  Age
                </TableCell>
                <TableCell align="center" className="font-bold">
                  Gender
                </TableCell>
                <TableCell align="center" className="font-bold">
                  Mail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.firstName}</TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                      <TableCell align="center">{row.gender}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
