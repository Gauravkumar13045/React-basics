import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [hrs, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setHour(String(hours).padStart(2, '0'));
      setMin(String(minutes).padStart(2, '0'));
      setSec(String(seconds).padStart(2, '0'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='clock'>
      <p>{hrs} : {min} : {sec}</p>
    </div>
  );
}

export default DigitalClock;
