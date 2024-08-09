import React, { useState } from 'react';
import ResearchTimeline from './ResearchTimeline'; // Adjust the import based on your file structure

const TimelineButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        onClick={handleOpenModal} 
        className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Research Timeline
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
          <div className="bg-white p-4 rounded-lg shadow-lg relative w-11/12 max-w-4xl mx-auto my-8">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-black">
              Close
            </button>
            <ResearchTimeline />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineButton;
