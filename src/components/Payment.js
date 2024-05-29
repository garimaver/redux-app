import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Payment = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        style={{
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#edf2f7',
          borderRadius: '8px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Payment Details</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ marginBottom: '0.5rem' }}>
              <input type="radio" name="payment" value="cash" /> Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" value="creditCard" /> Credit Card
            </label>
            <input
              type="text"
              placeholder="Card Number"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="Card Holder Name"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="Expiry Date"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="CVV"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button
              type="submit"
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#ed8936',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Pay Now
            </button>
          </form>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Shopping Cart</h2>
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      marginRight: '10px',
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                  <div>
                    <div>{item.name}</div>
                    <div>${item.price} x {item.quantity}</div>
                  </div>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', margin: '1rem 0' }}>
            Total: ${totalCost}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#fff',
                  color: '#ed8936',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  border: '1px solid #ed8936',
                }}
              >
                Go to Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
