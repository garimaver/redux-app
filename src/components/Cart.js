import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addToCart } from './cartSlice'; 

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', width: '400px', alignSelf:'center' ,backgroundColor: '#edf2f7', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Cart</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {cart.length === 0 && <h3 style={{ textAlign: 'center' }}>No items in cart</h3>}
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <img src={item.image} alt={item.name} style={{ marginBottom: '0.5rem', width: '4rem', height: '3rem', objectFit: 'cover' }} />
            <div style={{ textAlign: 'start' }}>{item.name}</div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>${item.price}</div>
              <div style={{ display: 'flex' }}>
                <button onClick={() => dispatch(removeFromCart(item.id))} style={{ backgroundColor: '#ed8936', padding: '0.5rem', borderRadius: '4px', marginRight: '0.5rem' }}>
                  -
                </button>
                <div style={{ margin: '0.25rem' }}>{item.quantity}</div>
                <button onClick={() => dispatch(addToCart(item))} style={{ backgroundColor: '#ed8936', padding: '0.5rem', borderRadius: '4px', marginLeft: '0.5rem' }}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
        Total: ${totalCost}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/payment" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#ed8936', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none' }}>
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
