import {useSelector} from 'react-redux'
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import style from "./link-base.module.css";
import {AppRootStateType} from "../../State/store";
import {InitialBaseStateType} from "../../State/link-base-reducer";

export const LinkBase = () => {
  const initialBaseState = useSelector<AppRootStateType, InitialBaseStateType>(state => state.base);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Domain',
      headerName: 'Domain',
      description: 'Domain name',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'DR',
      headerName: 'DR',
      description: 'Ahrefs DR of website',
      type: 'number',
      width: 40,
      editable: true,
    },
    {
      field: 'Traffic',
      headerName: 'Traffic',
      description: 'Traffic of website',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'Email',
      headerName: 'Email',
      type: 'string',
      description: 'Email of webmaster',
      width: 160,
      editable: true,
    },
    {
      field: 'Price',
      headerName: 'Price',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'Currency',
      headerName: 'Currency',
      editable: true,
      type: 'singleSelect',
      valueOptions: ['USD', 'EUR', 'PLN', 'RUB'],
      width: 60,
    },
    {
      field: 'Status',
      headerName: 'Status',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'Comment',
      headerName: 'Comment',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'Our_email',
      headerName: 'Our email',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'Project',
      headerName: 'Project',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'Lang',
      headerName: 'Lang',
      type: 'string',
      width: 90,
      editable: true,
    },
    {
      field: 'Link',
      headerName: 'Link',
      type: 'string',
      width: 150,
      editable: true,
    },
  ];

  return (
    <div className={style.table}>
      <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={initialBaseState.linkTableData}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </div>
  )
}