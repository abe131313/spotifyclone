import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Song, Releasedate, Artists, Rating) {
  return { Song, Releasedate, Artists, Rating };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

export default function BasicTable() {
  return (
    <div>
        <h3 class='m-3'>Top 10 songs</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="right">Songs</TableCell>
                <TableCell align="right">Release Date</TableCell>
                <TableCell align="right">Artists&nbsp;</TableCell>
                <TableCell align="right">Rating&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.Artwork}</TableCell>
                <TableCell align="right">{row.Song}</TableCell>
                <TableCell align="right">{row.Releasedate}</TableCell>
                <TableCell align="right">{row.Artists}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
