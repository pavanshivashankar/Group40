import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const RoleStrength = () => {
    const [roleCounts, setRoleCounts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/staff/roleStrength", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const reData = await response.json();
                    setRoleCounts(reData);
                } else {
                    console.error("Failed to fetch role counts:", response.status);
                }
            } catch (error) {
                console.error("Error fetching role counts:", error);
            }
        };

        fetchData();

    }, []);

    // Extract role names and counts from roleCounts
    const roles = roleCounts.map(role => role._id);
    const counts = roleCounts.map(role => role.count);

    // Generate an array of random colors
    const colors = ['#640D6B', '#E65C19', '#B51B75', '#F8D082']; // Add more colors as needed

    return (
        <div>
            {/* <h2>Total Strength of Each Role</h2> */}
            <div style={{ width: '100%', margin: 'auto' }}>
                <Plot
                    data={[
                        {
                            x: roles,
                            y: counts,
                            type: 'bar',
                            marker: { color: colors }, // Assign colors to each bar
                        },
                    ]}
                    layout={{ width: 600, height: 500, title: 'Total Strength of Each Role' }}
                />
            </div>
        </div>
    );
};

export default RoleStrength;
