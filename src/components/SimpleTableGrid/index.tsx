import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IHeader } from '../../@types/types';

interface SimpleTableGridProps {
  rows: any[];
  headers: IHeader[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    lineHeight: 1.2,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function SimpleTableGrid({ headers, rows }: SimpleTableGridProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <StyledTableCell key={header.label} align={header.align}>
                {header.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {headers.map((header) => (
                <StyledTableCell
                  key={`${row.id}-${header.key}`}
                  align={header.align}
                >
                  {row[`${header.key}`]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTableGrid;
