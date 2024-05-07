import React from 'react';
import Plot from 'react-plotly.js';

function VisitorStatistics() {
  const data = {
    labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
    datasets: [
      {
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total Gathering',
        x: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
        y: [100, 150, 200, 120, 180],
        line: { color: 'rgba(54, 162, 235, 1)' },
        marker: { color: 'rgba(54, 162, 235, 1)' }
      },
      {
        type: 'scatter',
        mode: 'lines',
        fill: 'tonexty',
        name: 'Total Gathering',
        x: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
        y: [100, 150, 200, 120, 180],
        fillcolor: 'rgba(54, 162, 235, 0.2)',
        line: { color: 'transparent' }
      }
    ]
  };

  const layout = {
    title: 'Visitor Statistics',
    xaxis: { title: 'Event' },
    yaxis: { title: 'Total Gathering' },
    showlegend: false
  };

  return (
    <div>
      {/* <h2>Visitor Statistics</h2> */}
      <Plot
        data={data}
        layout={layout}
        style={{ width: '80%', height: '400px' }}
      />
    </div>
  );
}

export default VisitorStatistics;
