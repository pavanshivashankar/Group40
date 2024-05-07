import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/event/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const eventData = await response.json();

        const formattedEvents = eventData.map((event) => ({
          id: event._id,
          title: event.name,
          start: new Date(event.date),
          end: new Date(event.date),
          location: event.location,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const eventStyleGetter = (event) => {
    const color = event.id % 2 === 0 ? "#4caf50" : "#2196f3";
    const style = {
      backgroundColor: color,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "none",
      width: "100%",
      height: "100%",
    };
    return { style };
  };

  return (
    <div>
      <h4>Upcoming Events</h4>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        style={{ height: 370, width: 560 }}
      />
    </div>
  );
}

export default UpcomingEvents;
