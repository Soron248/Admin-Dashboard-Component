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
import data from "@/utils/data.json";

export default function TableData() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const rows = data.users;

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
        sx={{
          width: "100%",
          overflow: "hidden",
          boxShadow: "none",
        }}
        className="m-auto mt-10 p-5"
      >
        <div className="w-full md:w-fit flex items-center justify-between mb-4 border rounded px-2 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <BiSearch className="ml-2 text-gray-500 cursor-pointer" />
        </div>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Object.keys(rows[0]).map((key, index) => (
                  <TableCell key={index} align="center" className="font-bold ">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {Object.entries(row).map(([key, value], index) => (
                        <TableCell
                          key={index}
                          align="center"
                          className="border border-gray-500 border-opacity-20"
                        >
                          {key === "status" ? (
                            // Customize the design for "status" here
                            <span
                              className={`px-3 py-1 rounded-badge ${
                                value === "closed"
                                  ? "bg-red-100 text-red-700"
                                  : value === "opened"
                                  ? "bg-green-100 text-green-700"
                                  : value === "in progress"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : ""
                              }`}
                            >
                              {value}
                            </span>
                          ) : (
                            // Render other data normally
                            value
                          )}
                        </TableCell>
                      ))}
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
