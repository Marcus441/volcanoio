import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Chart } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const PopulationGraph = ({ data }) => {
    const chartData = {
        labels: ['5km', '10km', '30km', '100km'],
        datasets: [
          {
            label: 'Population',
            data: data,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
          }
        ]
      };

    return (
        <div className="population-graph">
            <h2>Population Graph</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                     title : {
                         display: true,
                         text: 'Population',
                         fontSize: 20
                     },
                     legend: {
                         display: false,
                         position: 'right'
                     }
                 }
             }}
             />
         </div>
    );
}

export default PopulationGraph;