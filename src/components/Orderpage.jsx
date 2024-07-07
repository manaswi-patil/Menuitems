// src/EditOrderPage.jsx
import React from 'react';

const Orderpage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-blue-900 text-white p-8 w-1/3 h-screen">
        <h2 className="text-xl font-bold mb-4">
          Setting an example by prioritizing the importance of customer service in the workplace, leading the industry.
        </h2>
        {/* orderlist */}
        <ul>
          {[
            'Greet Guests Warmly',
            'Prioritize Safety First',
            'Follow Property & Service Protocols',
            'Offer Prompt Service',
            'Maintain Cleanliness Always',
            'Handle Complaints Professionally',
            'Respect Guest Privacy'
          ].map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <input type="checkbox" checked readOnly className="mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="p-8 w-2/3 h-screen bg-white">
        <h2 className="text-xl font-bold mb-4">Edit Order</h2>
        <h3 className="text-lg font-semibold mb-4 text-blue-900">Chicken Kebab</h3>
        <form className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="block mb-1"></label>
              <input type="text" className="w-full p-2 border rounded" placeholder='Item Name'/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div>
                <input type="radio" name="type" id="veg1" className="mr-2" />
                <label htmlFor="veg1">Veg</label>
              </div>
              <div>
                <input type="radio" name="type" id="non-veg1" className="mr-2" />
                <label htmlFor="non-veg1">Non-Veg</label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <input type="radio" name="type" id="veg2" className="mr-2" />
                <label htmlFor="veg2">Veg</label>
              </div>
              <div>
                <input type="radio" name="type" id="non-veg2" className="mr-2" />
                <label htmlFor="non-veg2">Non-Veg</label>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <select className="w-full p-2 border rounded" placeholder='Category'>
                <option value="">Category</option>
              </select>
            </div>
            <div className="w-1/2 space-x-4">
              <input type="text" className=" p-2 border rounded" placeholder='Rate'/>
            </div>
          </div>
          <div>
            <label className="block mb-1">Item Image</label>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded text-center">
              <img src="https://via.placeholder.com/50" alt="Chicken Kebab" className="inline-block mb-2" />
              <p>Edit or change this image</p>
              <p className="text-sm text-gray-500">Only JPEG, PNG are allowed up to 3Mb</p>
            </div>
          </div>
          <div>
            <label className="block mb-1"></label>
            <textarea className="w-full p-2 border rounded" placeholder='Item Description' rows="4"></textarea>
          </div>
          <div className="flex justify-end space-x-4">
    <button type="button" className=" text-red-500 px-4 py-2 rounded border-2 border-red-400">Delete</button>
    <button type="button" className=" text-gray-800 px-4 py-2 rounded border-2 border-blue-950">Cancel</button>
    <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Save</button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Orderpage;
