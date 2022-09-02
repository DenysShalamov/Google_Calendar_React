const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/events';

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Faild to create event');
    }
  });
};

export const fetchEventsCalendare = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Faild to load event');
      }
      return res.json();
    })
    .then((eventsCalendare) =>
      eventsCalendare.map(({ _id, ...event }) => ({ id: _id, ...event }))
    );
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Faild to delete event');
    }
  });
};
