import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const Volcanoes = (prop) => {
    const data = prop.volcanoes;
    const defaultColDef = useMemo(() => {
        return {
            resizable: false,
            flex: true,
        };
    }, []);


    const [colDefs, setColDefs] = useState([
        { field: "name" },
        { field: "region" },
        { field: "subregion" }
    ]);

    return (
        <div
            className="ag-theme-quartz" // applying the grid theme
            style={{
                height: "500px",
                width: "100%",
            }}
        >
            <AgGridReact
                defaultColDef={defaultColDef}
                pagination={true} // enable pagination
                paginationPageSize={10} // how many rows per page
                paginationPageSizeSelector={[10, 20, 50]} // the user can select the page size
                rowData={data}
                columnDefs={colDefs}
                domLayout="autoHeight"
            />
        </div>

    );
}

export default Volcanoes;