import React, { useState, useEffect } from 'react';

function SubscriberTable() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch('/subscribers') // Feltételezve, hogy a backend endpoint /subscribers
      .then(response => response.json())
      .then(data => {
        setSubscribers(data);
      });
  }, []);

  return (
    <table  className="bg-dark w-full h-80 border-orange-400 border-0 rounded p-2">
      <thead>
        <tr>
          <th>_id</th>
          <th>Email</th>
          <th>Subscription Date</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {subscribers.map(entry => (
          <tr key={entry[0]}> {/* entry[0] az _id (kulcs) */}
            <td>{entry[0]}</td> {/* _id */}
            <td>{entry[1].email}</td> {/* Email */}
            <td>{new Date(entry[1].subscriptionDate).toLocaleDateString()}</td> {/* Subscription Date */}
            <td>{entry[1].user}</td> {/* User */}
          </tr>
        ))}
      </tbody>
      dasdas
    </table>
  );
}

export default SubscriberTable;