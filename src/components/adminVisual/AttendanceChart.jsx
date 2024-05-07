import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const AttendanceChart = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/attendance", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setAttendanceData(data);
                } else {
                    console.error("Failed to fetch attendance data:", response.status);
                }
            } catch (error) {
                console.error("Error fetching attendance data:", error);
            }
        };

        fetchData();
    }, []);

    const staffs = attendanceData.map(entry => entry.staff);
    const statuses = attendanceData.map(entry => entry.status);

    const attendanceCounts = staffs.reduce((counts, staff, index) => {
        const status = statuses[index];
        counts[staff.role] = counts[staff.role] || { Present: 0, Absent: 0, Late: 0 };
        counts[staff.role][status] += 1;
        return counts;
    }, {});


    const chartData = Object.entries(attendanceCounts).map(([role, counts]) => [
        role,
        counts.Present,
        counts.Absent,
        counts.Late,
    ]);
    const chartOptions = {
        title: "Attendance Summary",
        legend: { position: "top" },
        vAxis: { title: "Staff Role" },
        hAxis: { title: "Attendance Count" },
    };

    return (
        <div>
            {/* <h2>Attendance Chart</h2> */}
            <Chart
                chartType="Bar"
                width="600px"
                height="400px"
                data={[
                    ["Staff Role", "Present", "Absent", "Late"],
                    ...chartData,
                ]}
                options={chartOptions}
            />
        </div>
    );
};

export default AttendanceChart;
