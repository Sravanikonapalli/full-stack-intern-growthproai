import React from 'react';

const Form = ({ name, location, setName, setLocation, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
  <button type="submit" disabled={!name || !location}>Submit</button>
    </form>
  );
};

export default Form;
