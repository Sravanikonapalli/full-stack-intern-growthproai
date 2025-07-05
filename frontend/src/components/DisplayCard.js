import React from 'react';
import { FaStar } from "react-icons/fa6";

const DisplayCard = ({ data, regenerateHeadline }) => {
  if (!data) return null;
  return (
    <div className="card">
      <h2>Google Rating: <FaStar size={30}/> {data.rating}</h2>
      <p>Reviews: {data.reviews}</p>
      <p><strong>SEO Headline:</strong> {data.headline}</p>
        <button 
        onClick={regenerateHeadline} 
        disabled={!data}
        >
        Regenerate SEO Headline
        </button>
    </div>
  );
};

export default DisplayCard;
