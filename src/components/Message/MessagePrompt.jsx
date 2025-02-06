import React from 'react';

const MessagePrompt = ({ message, type, onClose }) => {
  
  const getMessageStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (!message) return null;

  return (
<div 
  className={`p-4 w-full max-w-md rounded-md ${getMessageStyle()} flex justify-between items-center mt-4 mx-auto sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl`}>
  
  <span className="text-lg font-medium">{message}</span>
  
  <button 
    onClick={onClose} 
    className="ml-4 text-2xl font-semibold">
    x
  </button>
</div>

  );
};

export default MessagePrompt;
