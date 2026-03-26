import React from "react";
import Countdown from "react-countdown";
import { useParams } from "react-router-dom";
import { eventsData } from "../../data/eventsData";

export const EventDetailsContent = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <section className="td_event_details">
      <div className="container">
        {/* Event Image */}
        <div className="td_event_thumb mb-4">
          <img src={event.image} alt={event.title} />
        </div>

        {/* Event Info */}
        <div className="td_event_info">
          <h2 className="td_event_title">{event.title}</h2>
          <ul className="td_event_meta">
            <li>
              <span>{event.date}</span>
            </li>
            <li>
              <span>{event.time}</span>
            </li>
            <li>
              <span>{event.location}</span>
            </li>
          </ul>
          <p className="td_event_description">{event.description}</p>
          <a
            href={`/tickets/${event.id}`}
            className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
          >
            GET A TICKET
          </a>
        </div>

        {/* Optional Countdown if you want */}
        {event.date && (
          <div className="td_event_countdown mt-4">
            <Countdown date={new Date(event.date)} />
          </div>
        )}
      </div>
    </section>
  );
};