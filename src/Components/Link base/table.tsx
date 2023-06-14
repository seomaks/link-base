import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import style from "./table.module.css";

export const Table = () => {
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
      field: 'For_the_project',
      headerName: 'For the project',
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

  const rows = [
    { id: 1, Domain: 'si.com', DR: 59, Traffic: 220053, Email: 'boatos.org@gmail.com', Price: 345, Currency: 'USD', Status: 'Answered', Comment: 'Need a pre-payment', Our_email: 'katerichardson264@gmail.com', For_the_project: 'mightytips.com', Lang: 'EN', Link: 'https://www.talkchelsea.net/chelsea-loses-to-everton-what-happened/', },
    { id: 2, Domain: 'lentepubblica.it', DR: 20, Traffic: 31000, Email: 'boatos.org@gmail.com', Price: 135, Currency: 'USD', Status: 'Doesn\'t fit', Comment: 'Doesn\'t accept gambling', Our_email: 'katerichardson264@gmail.com', For_the_project: 'casinocanada.com', Lang: 'PL', Link: '', },
    { id: 3, Domain: 'techzimo.com', DR: 33, Traffic: 8200, Email: 'info@hercegovina.in', Price: 5535, Currency: 'USD', Status: 'Need a text assignment', Comment: '', Our_email: 'katerichardson264@gmail.com', For_the_project: 'mightytips.com', Lang: 'EN', Link: '', },
    { id: 4, Domain: 'programme-tv.net', DR: 38, Traffic: 35635, Email: 'info@hercegovina.in', Price: 735, Currency: 'PLN', Status: 'Article is being written', Comment: '', Our_email: 'katerichardson264@gmail.com', For_the_project: 'casinocanada.com', Lang: 'EN', Link: 'https://soccernet.ng/2019/05/expectations-for-the-african-cup-of-nations.html', },
    { id: 5, Domain: 'portalcatalao.com.br', DR: 52, Traffic: 456735, Email: 'menifyweb@gmail.com', Price: 345, Currency: 'PLN', Status: 'Send to webmaster', Comment: 'So expensive', Our_email: 'maksimvoevodin@mightytips.com', For_the_project: 'casinocanada.com', Lang: 'EN', Link: '', },
    { id: 6, Domain: 'fantasyfootballpundits.com', DR: 21, Traffic: 890035, Email: 'office@sannet.ro', Price: 305, Currency: 'PLN', Status: 'No answer', Comment: '', Our_email: 'maksimvoevodin@mightytips.com', For_the_project: 'casinocanada.com', Lang: 'EN', Link: '', },
    { id: 7, Domain: 'borsod24.hu', DR: 12, Traffic: 35, Email: 'ascom@portalcatalao.com.br', Price: 2335, Currency: 'EUR', Status: 'Blacklist', Comment: '', Our_email: 'maksimvoevodin@mightytips.com', For_the_project: 'casinocanada.com', Lang: 'EN', Link: '', },

  ]

  return (
    <div className={style.table}>
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
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