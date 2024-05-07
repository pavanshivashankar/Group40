import React from 'react';
import Plot from 'react-plotly.js';

function StaffScheduling() {
  const data = [
    {
      Task: 'Staff A',
      Start: '2024-04-01',
      Finish: '2024-04-04'
    }
  ];

  const layout = {
    title: 'Staff Scheduling',
    xaxis: {
      type: 'date',
      title: 'Date'
    },
    yaxis: {
      type: 'category',
      title: 'Staff'
    },
    showlegend: false,
    shapes: data.map(item => ({
      type: 'rect',
      xref: 'x',
      yref: 'paper',
      x0: item.Start,
      y0: 0,
      x1: item.Finish,
      y1: 1,
      fillcolor: 'rgba(255, 0, 0, 0.3)', 
      opacity: 0.3,
      line: {
        width: 0
      }
    }))
  };

  return (
    <div>
      {/* <h2>Staff Scheduling</h2> */}
      <Plot
        data={[
          {
            type: 'scatter',
            mode: 'markers',
            x: data.map(item => item.Start),
            y: data.map(item => item.Task),
            marker: {
              symbol: 'line-ns-open',
              size: 10,
              line: {
                width: 2,
                color: '#000'
              }
            }
          },
          {
            type: 'scatter',
            mode: 'markers',
            x: data.map(item => item.Finish),
            y: data.map(item => item.Task),
            marker: {
              symbol: 'line-ns-open',
              size: 10,
              line: {
                width: 2,
                color: '#000'
              }
            }
          }
        ]}
        layout={layout}
        style={{ width: '20%', height: '400px' }}
      />
    </div>
  );
}

export default StaffScheduling;
