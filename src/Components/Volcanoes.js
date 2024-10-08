import { useNavigate } from "react-router-dom";

import { useMemo } from "react";

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const Volcanoes = (prop) => {
    const data = prop.volcanoes;

    const navigate = useNavigate();
    
    const defaultColDef = useMemo(() => {
        return {
            resizable: false,
            flex: true,
        };
    }, []);


    const colDefs = [
        { field: "name" },
        { field: "region" },
        { field: "subregion" }
    ];

    return (
        <div
            className="ag-theme-quartz" // applying the grid theme

        >
            <AgGridReact
                // styling
                animateRows={false}
                defaultColDef={defaultColDef}
                domLayout="autoHeight"

                // pagination
                pagination={true} // enable pagination
                paginationPageSize={10} // how many rows per page
                paginationPageSizeSelector={[10, 20, 50]} // the user can select the page size

                // router
                onRowClicked={row => navigate(`/volcano/${row.data.id}`)}
                // data
                rowData={data}
                columnDefs={colDefs}
            />
        </div>

    );
}

export default Volcanoes;