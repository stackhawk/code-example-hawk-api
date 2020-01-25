import React from "react";
import { Hawk } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";

interface TableProps {
  hawks: Hawk[];
}

interface TableRowProps {
  hawk: Hawk;
}

const TableRow: React.FC<TableRowProps> = TableRowProps => {
  return (
    <li className="table-row">
      <span className="name">{TableRowProps.hawk.name}</span>
      <span className="size">{TableRowProps.hawk.size}</span>
      <span className="gender">{TableRowProps.hawk.gender}</span>
      <button>View</button>
    </li>
  );
};

const Table: React.FC<TableProps> = TableProps => {
  return (
    <ol className="table">
      {TableProps.hawks.length < 1 ? (
        <li>Add a hawk with the Add Hawk button</li>
      ) : (
        TableProps.hawks.map(hawk => <TableRow hawk={hawk}></TableRow>)
      )}
    </ol>
  );
};

export default Table;
