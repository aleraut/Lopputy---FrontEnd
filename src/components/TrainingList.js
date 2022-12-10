import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import dayjs from "dayjs";

function TrainingList() {
    const [training, setTraining] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then(response => response.json())
        .then(responseData => setTraining(responseData))
    };

    const columns = ([
        {   
            headerName: "Customer",
            field: "customer",
            sortable: true,
            filter: true,
            floatingFilter: true,
            cellRendererFramework: (params) => (
                <div>
                {params.value.firstname} {params.value.lastname}
                </div>
            )
        },
        {
            headerName:"Date", 
            field: "date", 
            sortable: true, 
            filter: true, 
            floatingFilter: true,
            cellRendererFramework: (params) => {
                const date = dayjs(params.value); 
                const formattedDate = date.format('DD.MM.YYYY HH:mm'); 
                return <div>{formattedDate}</div>;
        }},
        { 
            headerName:"Duration",
            field: "duration",
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        { 
            headerName:"Activity",
            field: "activity",
            sortable: true,
            filter: true,
            floatingFilter: true 
        }
    ]);

    return(
        <div>
            <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}} >
                <AgGridReact 
                rowData={training}
                columnDefs={columns}
                paginationPageSize={10}
                pagination={true}
                />
            </div>
        </div>
    );
};

export default TrainingList;