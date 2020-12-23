import React, { useState,useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function PocTable() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/mockList`)
        .then(res =>{console.log(res.data);
        setRowData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className="ag-theme-alpine" style={ { height: 800, width: 1800 } }>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="col1" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                <AgGridColumn field="col2"></AgGridColumn>
                <AgGridColumn field="col3"></AgGridColumn>
                <AgGridColumn field="col4"></AgGridColumn>
                <AgGridColumn field="col5"></AgGridColumn>
                <AgGridColumn field="col6"></AgGridColumn>
                <AgGridColumn field="col7"></AgGridColumn>
                <AgGridColumn field="col8"></AgGridColumn>
                <AgGridColumn field="col9"></AgGridColumn>
                <AgGridColumn field="col10"></AgGridColumn>
                <AgGridColumn field="col11"></AgGridColumn>
                <AgGridColumn field="col12"></AgGridColumn>
                <AgGridColumn field="col13"></AgGridColumn>
                <AgGridColumn field="col14"></AgGridColumn>
                <AgGridColumn field="col15"></AgGridColumn>
                <AgGridColumn field="col16"></AgGridColumn>
                <AgGridColumn field="col17"></AgGridColumn>
                <AgGridColumn field="col18"></AgGridColumn>
                <AgGridColumn field="col19"></AgGridColumn>
                <AgGridColumn field="col20"></AgGridColumn>
            </AgGridReact>
        </div>
    )
    
}
export default PocTable;