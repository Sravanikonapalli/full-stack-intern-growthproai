import React, { useState } from 'react';
import Form from './Form';
import DisplayCard from './DisplayCard';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('http://localhost:5000/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location })
    });
    const result = await res.json();
    setData(result);
    setSubmitted(true);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
    const result = await res.json();
    setData(prev => ({ ...prev, headline: result.headline }));
    setLoading(false);
  };

  return (
    <div className="dashboard">
      {loading && <p>Loading...</p>}
      {!submitted && !loading && (
        <Form
          name={name}
          location={location}
          setName={setName}
          setLocation={setLocation}
          handleSubmit={handleSubmit}
        />
      )}
      {!loading && data && (
        <DisplayCard data={data} regenerateHeadline={regenerateHeadline} />
      )}
    </div>
  );
};

export default Dashboard;
