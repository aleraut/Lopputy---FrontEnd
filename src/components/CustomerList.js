import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(responseData => setCustomers(responseData.content))
    };

    const columns = [
        {headerName: "First name", field: "firstname", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Last name", field: "lastname", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Street address", field: "streetaddress", sortable: true, filter: true, floatingFilter: true },
        {headerName: "Postcode", field: "postcode", sortable: true, filter: true, floatingFilter: true},
        {headerName: "City", field: "city", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Email address", field: "email", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Phone number",field: "phone", sortable: true, filter: true, floatingFilter: true},
    ];
   

    return(
        <div>
            <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}} >
                <AgGridReact 
                rowData={customers}
                columnDefs={columns}
                paginationPageSize={10}
                pagination={true}
                />
            </div>
        </div>
    );
};

export default CustomerList;