import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Hawk } from './services/hawk';

interface Props {
  hawks: Hawk[];
  onClick: (hawkId: number) => void;
}

const HawkTable: React.FC<Props> = ({ hawks, onClick }) => {
  return (
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Size</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {hawks.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.size}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">
              <IconButton aria-label="edit" onClick={() => onClick(row.id)}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HawkTable;
