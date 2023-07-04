import React, { ReactNode } from "react";
import classes from "./UserTable.module.css";

interface TableProps {
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table className={classes.users}>{children}</table>;
};

const TableHead: React.FC<TableProps> = ({ children }) => {
  return <thead className={classes.heading}>{children}</thead>;
};

const TableBody: React.FC<TableProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableRow: React.FC<TableProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableCell: React.FC<TableProps> = ({ children }) => {
  return <td>{children}</td>;
};

const TableHeading: React.FC<TableProps> = ({ children }) => {
  return <th>{children}</th>;
};

const Pagination: React.FC<TableProps> = ({ children }) => {
  return <div className={classes.pagination}>{children}</div>;
};

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeading,
  TableCell,
  Pagination,
};
