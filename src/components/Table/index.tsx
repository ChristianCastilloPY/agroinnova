/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import { ReactNode } from "react";
import {
  Paper,
  Typography,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from "@mui/material";
import empty from "is-empty";
import CustomTableRow from "./CustomTableRow";
import CustomPaginate from "../CustomPaginate";

export interface ColumnsProps<T = unknown> {
  rol?: string;
  field: any;
  label: string;
  width?: number;
  maxWidth?: number;
  align?: "right" | "left" | "inherit" | "center" | "justify";
  type: "text" | "id" | "component";
  valueGetter?: (params: { row: T }) => string | ReactNode | number;
}

interface TableComponentProps<T> {
  variant: "normal";
  columns: ColumnsProps<T>[];
  rows: T[];
  size?: "medium" | "small";
  stickyHeader?: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  withoutHeight?: boolean;
  height?: number | string;
  selected?: (params: { row: T }) => boolean;
  onSelectedRows?: (data: T[]) => void;
  onSelectedRow?: (data: T) => void;
  onRefresh?: () => void;
  totalCount?: number;
  limit?: number | string;
  currentPage?: number | string;
}

interface TableComponentWithPaginateProps<T>
  extends Omit<TableComponentProps<T>, "variant"> {
  variant: "paginate" | "normal";
  totalCount: number;
  limit: number | string;
  currentPage: number | string;
}

type MainProps<T> = TableComponentProps<T> | TableComponentWithPaginateProps<T>;

export default function SimpleTable<T>({
  rows,
  columns,
  isLoading = false,
  isFetching = false,
  size = "small",
  stickyHeader = true,
  variant,
  onRefresh,
  onSelectedRow,
  selected,
  ...rest
}: MainProps<T>) {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "calc(100vh - 28rem)", marginBottom: "20px" }}
      >
        {isFetching && (
          <LinearProgress variant="query" sx={{ width: "100%" }} />
        )}
        <Table stickyHeader={stickyHeader} size={size}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.label} align={col.align}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading &&
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={`${i}`}>
                  <TableCell colSpan={columns.length} align="center">
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))}
            {!empty(rows) &&
              !isLoading &&
              rows.map((row, index) => (
                <CustomTableRow
                  key={index}
                  columns={columns}
                  item={row}
                  onClick={onSelectedRow}
                  selected={selected ? selected({ row }) : false}
                />
              ))}
            {!isLoading && rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Typography>No exiten registros.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {variant === "paginate" && (
        <CustomPaginate
          variant="paginate"
          count={rest?.totalCount || 0}
          page={Number(rest?.currentPage) || 0}
          limit={Number(rest?.limit) || 10}
          onRefresh={() => onRefresh}
          isFetching={isFetching}
        />
      )}
    </>
  );
}
