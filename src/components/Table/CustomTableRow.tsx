/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
import { TableCell, TableRow, Typography } from "@mui/material";

import { cloneElement } from "react";
import { ColumnsProps } from "./index";

interface TableRowProps<T> {
  item: T;
  columns: Array<ColumnsProps<T>>;
  onClick?: (item: T) => void;
  isRowSelected?: boolean;
  selected?: boolean;
}

function CustomTableRow<T>({
  item,
  columns,
  onClick,
  selected = false,
  // isRowSelected = false,
  ...rest
}: TableRowProps<T>) {
  function renderTableCell(header: ColumnsProps<T>) {
    switch (header.type) {
      case "text":
        return (
          <TableCell align={header.align}>
            <Typography
              variant="body2"
              color="text.primary"
              gutterBottom
              noWrap
            >
              {header.valueGetter && header.valueGetter({ row: item })}
            </Typography>
          </TableCell>
        );
      case "component":
        return (
          <TableCell align={header.align}>
            {header.valueGetter && header.valueGetter({ row: item })}
          </TableCell>
        );
      case "id":
        return <TableCell align={header.align}>test</TableCell>;
    }
  }

  return (
    <TableRow
      hover
      onClick={onClick ? () => onClick(item) : () => {}}
      selected={selected}
      {...rest}
    >
      {columns.map((header) =>
        cloneElement(renderTableCell(header), { key: header.field })
      )}
    </TableRow>
  );
}

export default CustomTableRow;
