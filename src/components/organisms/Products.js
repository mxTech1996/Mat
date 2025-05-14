import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import React from 'react';

const Products = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const products = dataSite.products;
  return (
    <section id='products' className='px-8 py-12 bg-[#fef9f5]'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <p className='uppercase text-sm font-semibold tracking-wider'>
            Venue Highlights
          </p>
          <h2 className='text-3xl font-bold'>
            Spaces That Are Perfect for Your Next Event
          </h2>
        </div>
        {/* <button className='bg-black text-white px-4 py-2 hover:opacity-90 transition'>
          View All
        </button> */}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {products.map((event, index) => {
          const isInCart = validateProductInCart(event.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(event.id);
          };

          return (
            <div
              key={index}
              className='group cursor-pointer hover:shadow-lg transition rounded overflow-hidden bg-white'
            >
              <img
                src={event.image}
                alt={event.name}
                className='w-full h-64 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{event.name}</h3>
                <p className='text-sm text-gray-500'>{event.price}</p>

                {/* Add to cart button */}
                <button
                  onClick={handleClick}
                  style={{ backgroundColor: isInCart ? 'red' : 'green' }}
                  className='mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
