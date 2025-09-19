import React, { useState, useMemo } from 'react';

function factorial(n) {
  console.log('Calculating factorial...');
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

export default function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);


  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        min="0"
        onChange={e => setNumber(parseInt(e.target.value) || 0)}
        style={{ padding: '8px', width: 100 }}
      />
      <p>Factorial: {fact}</p>

      <button onClick={() => setToggle(!toggle)} style={{ marginTop: 20 }}>
        Re-render Parent ({toggle ? 'ON' : 'OFF'})
      </button>
    </div>
  );
}
