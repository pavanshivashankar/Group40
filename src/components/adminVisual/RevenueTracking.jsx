import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function RevenueTracking() {
  const [revenueData, setRevenueData] = useState({ labels: [], revenue: [], color: [] });

  useEffect(() => {
  
    const generateRevenueData = () => {
      const currentDate = new Date();
      const labels = [];
      const revenue = [];
      const color = [];

      let previousRevenue = null;

      for (let i = 14; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i);
        const totalRevenue = Math.floor(Math.random() * 10000) + 500;
        
        labels.push(date.toISOString().slice(0, 10));
        revenue.push(totalRevenue);

        if (previousRevenue !== null) {
          color.push(totalRevenue > previousRevenue ? '#00ff00' : '#ff0000');
        } else {
          color.push('#B51B75');
        }

        previousRevenue = totalRevenue;
      }

      setRevenueData({ labels, revenue, color });
    };

    generateRevenueData();
  }, []);

  const trace = {
    x: revenueData.labels,
    y: revenueData.revenue,
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy',
    line: { color: '#E65C19' },
  };

  const layout = {
    title: 'Revenue Tracking',
    xaxis: { title: 'Day' },
    yaxis: { title: 'Revenue' },
    showlegend: false,
  };

  return (
    <div>
      <Plot
        data={[trace]}
        layout={layout}
        style={{ width: '80%', height: '400px' }}
      />
    </div>
  );
}

export default RevenueTracking;
