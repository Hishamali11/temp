import React,{useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'id', headerName: 'Sl_no', width: 90 },
  {
    field: 'business_code',
    headerName: 'Business Code',
    width: 150,
  },
  {
    field: 'cust_number',
    headerName: 'Customer Number',
    width: 120,
  },
  {
    field: 'clear_date',
    headerName: 'Clear Date',
    type: 'date',
    width: 150,
  },
  {
    field: 'buisness_year',
    headerName: 'Buisness Year',
    width: 100,
  },
  {
    field: 'doc_id',
    headerName: 'Document Id',
    width: 100,
  },
  {
    field: 'posting_date',
    headerName: 'Posting Date',
    width: 150,
  },
  {
    field: 'document_create_date',
    headerName: 'Document Create Date',
    width: 150,
  },
  {
    field: 'due_in_date',
    headerName: 'Due Date',
    width: 120,
  },
  {
    field: 'invoice_currency',
    headerName: 'Invoice Currency',
    width: 120,
  },
  {
    field: 'document_type',
    headerName: 'Document Type',
    width: 120,
  },
  {
    field: 'posting_id',
    headerName: 'Posting Id',
    width: 100,
  },
  {
    field: 'total_open_amount',
    headerName: 'Total Open Amount',
    width: 150,
  },
  {
    field: 'baseline_create_date',
    headerName: 'Baseline Create Date',
    width: 160,
  },
  {
    field: 'cust_payment_terms',
    headerName: 'Customer Payment Terms',
    width: 160,
  },
  {
    field: 'invoice_id',
    headerName: 'Invoice Id',
    width: 160,
  },
];


 function DataGridDemo() {
  const [rows,setRows]=useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/HRC/Fetch')
    .then((response)=>response.json())
    .then((row)=>setRows(row))
  }, [])
  


  const [pageSize, setPageSize] = React.useState(5);
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1 }}>

      <DataGrid

        sx={{
        '& .MuiDataGrid-columnHeaderTitle': {
         textOverflow: "clip",
        whiteSpace: "break-spaces",
        lineHeight: 2,
        
         },
         
           '& 	.MuiDataGrid-columnHeaders':{
              color:'white',
              backgroundColor: '#283d4a',

           },
           '& .MuiDataGrid-columnSeparator':{
             //color:"#283d4a"
             display: 'none'
           },
           '& .MuiDataGrid-row':{
            color:'white',
            backgroundColor: '#2d4250'
           },
           '&.MuiDataGrid-root': {
            border: 'none',
          },
          "&:hover": {
            backgroundColor: "#283d4a"
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor:'#283d4a'
         },
         '& .MuiDataGrid-checkboxInput':{
           color:"white",
         },
         '& .MuiDataGrid-selectedRowCount':{
           color:'white'
         },
         '& .MuiTablePagination-toolbar':{
           color:"white"
         }
         
      }}

        rows={rows}
        columns={columns}
        headerHeight={80}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
      </div>
    </div>
  );
}
export default DataGridDemo;