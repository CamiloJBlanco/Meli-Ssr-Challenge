import React from 'react';
import '../assets/css/loading.scss';

export default function Loading() {
  return (
    <div className="loading">
      <div className="card-message">
        <div className="loading-print"></div>
      </div>
    </div>
  );
}
