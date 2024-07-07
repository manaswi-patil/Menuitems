
// // import image from '../assets/image1.jpg'
// // const menuItems = Array(10).fill({
// //     name: 'Chicken Kabab',
// //     description: 'Juicy, flavorful, grilled chicken skewers. (6 Pc)',
// //     price: 'Rs. 575/-',
// //     image: {image}
// //   })
  
// //   const RestaurantMenu = () => {
// //     return (
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex justify-between items-center mb-6">
// //           <h2 className="text-2xl font-bold">Restaurant Menu Overview</h2>
// //           <div>
// //             <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">+ Add Restaurant</button>
// //             <button className="bg-blue-600 text-white px-4 py-2 rounded-md">+ Add new item</button>
// //           </div>
// //         </div>
        
// //         <div className="flex mb-6">
// //           <img src={image} alt="The Food Inn" className="w-1/3 h-48 object-cover rounded-lg mr-4" />
// //           <div>
// //             <h3 className="text-xl font-semibold mb-2">The Food Inn</h3>
// //             <p className="text-gray-600">
// //               Efficient, courteous staff offer an array of <br/>gourmet dishes in a cozy atmosphere. <br/>Seamless service elevates the dining<br/>experience.
// //             </p>
// //           </div>
// //         </div>
  
// //         <div className="flex space-x-4 mb-6">
// //           {['Starter', 'Main Course', 'Snacks', 'Desert', 'Beverages'].map((category) => (
// //             <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'Main Course' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
// //               {category}
// //             </button>
// //           ))}
// //         </div>
  
// //         <div className="grid grid-cols-5 gap-6">
// //           {menuItems.map((item, index) => (
// //             <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
// //               <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
// //               <div className="p-4">
// //                 <h4 className="font-semibold">{item.name}</h4>
// //                 <p className="text-sm text-gray-600">{item.description}</p>
// //                 <div className="flex justify-between items-center mt-2">
// //                   <span className="font-bold">{item.price}</span>
// //                   <button className="text-gray-500">
// //                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
// //                     </svg>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     )
// //   }
  
// //   export default RestaurantMenu

// import image from '../assets/image1.jpg'
// import image2 from '../assets/image2.jpg'
// import image3 from '../assets/image3.jpg'
// import image4 from '../assets/image4.jpg'
// const menuItems = [
//   {
//     name: 'Chicken Kabab',
//     description: 'Juicy, flavorful, grilled chicken skewers. (6 Pc)',
//     price: 'Rs. 575/-',
//     image: image
//   },
//   {
//     name: 'Chicken Kabab',
//     description: 'Juicy, flavorful, grilled chicken skewers. (6 Pc)',
//     price: 'Rs. 575/-',
//     image: image2
//   },
//   // Repeat these two items to create 10 total items
//   ...Array(4).fill().flatMap(() => [
//     {
//       name: 'Chicken Kabab',
//       description: 'Juicy, flavorful, grilled chicken skewers. (6 Pc)',
//       price: 'Rs. 575/-',
//       image:image
//     },
//     {
//       name: 'Chicken Kabab',
//       description: 'Juicy, flavorful, grilled chicken skewers. (6 Pc)',
//       price: 'Rs. 575/-',
//       image:image3
//     }
//   ])
// ];

// const RestaurantMenu = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="flex justify-between items-center ">
//         <h2 className="text-2xl text-gray-400">Restaurant Menu Overview</h2>
//         <div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">+ Add Restaurant</button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md">+ Add new item</button>
//         </div>
//       </div>
      
//       <div className="flex mb-6">
//         <img src={image4} alt="The Food Inn" className="w-1/3 h-36 object-cover rounded-lg mr-4" />
//         <div>
//           <div className="flex items-center">
//             <h3 className="text-xl font-semibold mb-2">The Food Inn</h3>
//             <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//             </svg>
//           </div>
//           <p className="text-gray-600">
//             Efficient, courteous staff offer an array of <br/>gourmet dishes in a cozy atmosphere. <br/>Seamless service elevates the dining <br/>experience.
//           </p>
//         </div>
//       </div>

//       <div className="flex space-x-4 mb-6">
//         {['Starter', 'Main Course', 'Snacks', 'Desert', 'Beverages'].map((category) => (
//           <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'Main Course' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-5 gap-10">
//         {menuItems.map((item, index) => (
//           <div key={index} className="bg-gray-500 rounded-lg  overflow-hidden">
//             <img src={item.image}  className="w-[60%] mx-auto h-[60px] object-cover" />
//             <div className="">
//               <h4 className="font-semibold">{item.name}</h4>
//               <p className="text-sm text-center justify-center items-center text-gray-600">{item.description}</p>
//               <div className="flex justify-between items-center ">
//                 <span className="font-bold">{item.price}</span>
//                 <button className="text-gray-500">
//                   <svg className="w-5 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RestaurantMenu

import { FaEdit } from 'react-icons/fa';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'

const menuItems = [
  {
    name: 'Chicken Kabab',
    description: 'Juicy, flavorful, grilled chicken skewers.',
    price: 'Rs. 575/-',
    image: image1,
    edit: true
  },
  {
    name: 'Chicken Tikka',
    description: 'Marinated in spices, grilled chicken. ',
    price: 'Rs. 650/-',
    image: image2,
    edit: true
  },
  {
    name: 'Mutton Biryani',
    description: 'Flavorful mutton cooked in aromatic spices.',
    price: 'Rs. 725/-',
    image: image3,
    edit: true
  },

  {
    name: 'Chicken Biryani',
    description: 'Flavorful vege cooked in aromatic spices.',
    price: 'Rs. 600/-',
    image: image2,
    edit: true
  },
  {
    name: 'Rajma Masala',
    description: 'Spicy and flavorful Rajma dish. ',
    price: 'Rs. 550/-',
    image: image5,
    edit: true
  },
  {
    name: 'Chicken Tandoori',
    description: 'Marinated in spices, grilled chicken.',
    price: 'Rs. 625/-',
    image: image6,
    edit: true
  },
  {
    name: 'Vegetable Kebab',
    description: 'Flavorful vege cooked in spices. ',
    price: 'Rs. 575/-',
    image: image7,
    edit: true
  },
  {
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken in creamy sauce. ',
    price: 'Rs. 700/-',
    image: image8,
    edit: true
  },
  {
    name: 'Chicken Biryani',
    description: 'Flavorful vege cooked in aromatic spices. ',
    price: 'Rs. 600/-',
    image: image9,
    edit: true
  },
  {
    name: 'Chicken Tandoori Masala',
    description: 'Grilled chicken in creamy sauce. ',
    price: 'Rs. 750/-',
    image: image10,
    edit: true
  },
];

  const RestaurantMenu = () => {

  return (
    <div className="max-w-7xl mx-auto h-screen w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-400">Restaurant Menu Overview</h2>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 ">+ Add Restaurant</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">+ Add new item</button>
        </div>
      </div>

      <div className="flex mb-2">
        <img src={image4} alt="The Food Inn" className="w-48 h-40 object-cover rounded-lg mr-4 " />
        <div>
          <div className="flex items-center">
            <h3 className="text-xl font-semibold mb-2 ml-10">The Food Inn</h3>
            <FaEdit className="ml-2 text-gray-500" />
          </div>
          <p className="text-gray-600 ml-10">
            Efficient, courteous staff offer an array of <br />
            gourmet dishes in a cozy atmosphere. <br />
            Seamless service elevates the dining <br />
            experience.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mb-6 text-black">
        {['Starter', 'Main Course', 'Snacks', 'Desert', 'Beverages'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border-none text-sm font-medium ${
              category === 'Main Course' ? ' text-black' : 'text-bold text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        {menuItems.map((item, index) => (
          <div key={index} className="border border-gray-300  w-40 h-[210px] ">
            <img src={item.image} alt={item.name} className="w-full h-20 object-cover rounded flex pl-6 pr-6  pt-3" />
            <div className="">
              <h3 className="text-sm font-semibold mt-1 pl-7">{item.name}</h3>
              <p className="text-gray-600 pl-7">{item.description}</p>
              <p className="text-gray-900 text-sm pl-7">Price: {item.price}</p>
              {/* {item.edit && (
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-4 inline-flex items-center">
                  {/* <FaEdit className="w-5 h-5 mr-2" /> */}
                {/* </button> */}
              {/* )}  */}
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;