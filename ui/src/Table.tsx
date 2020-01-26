import React from "react";
import { Hawk } from "./HawkReference";

interface TableProps {
  hawks: Hawk[];
  toggleDetails: Function;
}

interface TableRowProps {
  hawk: Hawk;
  toggleDetails: Function;
}

const TableRow: React.FC<TableRowProps> = TableRowProps => {
  return (
    <li className="table-row">
      <span className="name">{TableRowProps.hawk.name}</span>
      <span className="size">{TableRowProps.hawk.size}</span>
      <span className="gender">{TableRowProps.hawk.gender}</span>
      <button onClick={() => TableRowProps.toggleDetails(TableRowProps.hawk)}>
        View
      </button>
    </li>
  );
};

const Table: React.FC<TableProps> = TableProps => {
  return (
    <ol className="table">
      {TableProps.hawks.length < 1 ? (
        <li>Add a hawk with the Add Hawk button</li>
      ) : (
        TableProps.hawks.map(hawk => (
          <TableRow
            hawk={hawk}
            toggleDetails={TableProps.toggleDetails}
          ></TableRow>
        ))
      )}
    </ol>
  );
};

export default Table;
