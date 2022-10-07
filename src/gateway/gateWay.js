const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/events';

export const getEvents = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (!response.ok)
        throw new Error("Internal Server Error. Can't display events ");

      return response.json();
    })
    .then((events) =>
      events.map((el) => {
        const { dateFrom, dateTo, id } = el;

        return {
          ...el,
          dateFrom: new Date(dateFrom),
          dateTo: new Date(dateTo),
          id: Number(id),
        };
      })
    )
    .catch((error) => alert(error.message));
};

export const postEvent = (event) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
};

export const deleteEvent = (id) => {
  return fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
};
