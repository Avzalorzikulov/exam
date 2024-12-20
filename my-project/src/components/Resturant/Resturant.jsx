import React from 'react';
import restaurants from '../../../public/restaurant.json'

export default function RestaurantCard() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {restaurants.map((res, ) => (
        <div key={res.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img src={res.imageCarousel.images[0].url} alt={res.imageCarousel.images[0].alt} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className='text-xl font-bold text-gray-900'>{res.restaurant.name}</h3>
            <p className='text-gray-600'>{res.restaurant.address.line1}</p>
            <p className='text-gray-600'>{res.restaurant.address.line2}</p>
            <p className='text-gray-700 mt-2'>{res.restaurant.hours}</p>
            <div className='mt-4 flex space-x-2'>
              {res.timeSlots.slice(0, 2).map((slot, index) => (
                <span key={index} className={`px-3 py-1 rounded-full ${slot.available ? 'bg-orange-200 text-green-700 rounded-md' : 'bg-gray-200 text-gray-700'}`}>
                  {slot.time}
                </span>
              ))}
              <button  className="px-4 py-2 bg-[#5E5E5E] text-white rounded-md  ">More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}