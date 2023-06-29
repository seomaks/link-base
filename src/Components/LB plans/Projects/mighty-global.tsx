import style from "../Projects/mighty-global.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../State/store";
import {InitialBaseStateType} from "../../../State/link-base-reducer";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Box} from "@mui/material";

export const MightyGlobal = () => {

  const initialBaseState = useSelector<AppRootStateType, InitialBaseStateType>(state => state.base);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Month',
      headerName: 'Month',
      description: 'Period of posting links',
      type: 'string',
      width: 100,
      editable: true,
    },
    {
      field: 'Domain',
      headerName: 'Domain',
      description: 'Website name',
      type: 'string',
      width: 90,
      editable: true,
    },
    {
      field: 'Email',
      headerName: 'Email',
      description: 'Email of owner',
      type: 'string',
      width: 90,
      editable: true,
    },
    {
      field: 'Price',
      headerName: 'Price',
      description: 'Price per site in local currency',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'USD',
      headerName: 'USD',
      description: 'Price per site in dollars US',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'Currency',
      headerName: 'Currency',
      type: 'string',
      width: 60,
      editable: true,
    },
    {
      field: 'DR',
      headerName: 'DR',
      type: 'number',
      width: 60,
      editable: true,

    },
    {
      field: 'Traffic',
      headerName: 'Traffic',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'Anchor',
      headerName: 'Anchor',
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
      field: 'URL',
      headerName: 'URL',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'Lang',
      headerName: 'Lang',
      type: 'string',
      width: 40,
      editable: true,
    },
    {
      field: 'Link',
      headerName: 'Link',
      type: 'string',
      width: 90,
      editable: true,
    },
    {
      field: 'Status',
      headerName: 'status',
      type: 'string',
      width: 90,
      editable: true,
    },
   {
      field: 'Text number',
      headerName: 'Text number',
      type: 'number',
      width: 40,
      editable: true,
    },
   {
      field: 'Text link',
      headerName: 'Text link',
      type: 'string',
      width: 90,
      editable: true,
    },
   {
      field: 'Screen 1',
      headerName: 'Screen 1',
      type: 'string',
      width: 90,
      editable: true,
    },
   {
      field: 'Screen 2',
      headerName: 'Screen 2',
      type: 'string',
      width: 90,
      editable: true,
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.header}>
        <Link to="login" className={style.item}>Date</Link>
        <Link to="mightytips-com" className={style.item}>Outreach</Link>
        <Link to="plans" className={style.item}>Banners</Link>
      </div>
      <div className={style.table}>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={initialBaseState.linkTableData.filter(data => data.Project === 'mightytips.com')}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  )
}