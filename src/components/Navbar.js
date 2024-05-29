import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#cbd5e0', padding: '0.5rem 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: 'calc(100% - 1rem)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/image.png" alt="Logo" style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#fff' }} />
        </div>

        <ul style={{ display: 'flex' , listStyle:"none" }}>
          <li style={{ marginRight: '1.5rem' }}>
            <button style={{ color: '#000', border: 'none', outline: 'none', cursor: 'pointer' }}>Home</button>
          </li>
          <li style={{ marginRight: '1.5rem' }}>
            <button style={{ color: '#000', border: 'none', outline: 'none', cursor: 'pointer' }}>Categories</button>
          </li>
          <li>
            <button style={{ color: '#000', border: 'none', outline: 'none', cursor: 'pointer' }}>About Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
