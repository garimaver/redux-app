import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import shoesData from './shoesData'; 
import Cart from './Cart';
const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ padding: '20px', flex: '1' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {shoesData.map((shoe) => (
            <div
              key={shoe.id}
              style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
            >
              <img src={shoe.image} alt={shoe.name} style={{ marginBottom: '0.5rem', width: '8rem', height: '6rem', objectFit: 'cover' }} />
              <div style={{ backgroundColor: '#ed8936', padding: '0.5rem', borderRadius: '4px', width: '8rem', textAlign: 'center', marginBottom: '0.5rem' }}>{shoe.name}</div>
              <div style={{ textAlign: 'center' }}>${shoe.price}</div>
              <button
                onClick={() => dispatch(addToCart(shoe))}
                style={{ marginTop: '0.5rem', border: '1px solid #000', backgroundColor: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
 
    </div>
    <Cart/>
    </>
  );
};

export default Home;
