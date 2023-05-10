// import React, { useState, useEffect } from 'react';

// const Lent = ({ libraryOwner }) => {
//   const [lent, setLent] = useState({data: []});
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchLent = async () => {
//     setIsLoading(true);
//     try {
//       const {data} = await axios.get(`http://localhost:8080/${libraryOwner}/lent`);
//       setLent({data: Object.values(data)});
//     } catch (err) {
//       console.log('error',err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {library.data ?
//       <div className='Result-container'>
//       <div className='Result-header'>My Shelf ({library.data.length})</div>
//         <div className='Result-section'>
//         <table className={'Qrcode-result-table'}>
//           <thead>
//             <tr>
//               <td>#</td>
//               <td>Cover</td>
//               <td>Title</td>
//               <td>Author(s)</td>
//               <td>ISBN</td>
//             </tr>
//           </thead>
//           <tbody>
//           {
//             library.data.map((result, i) => {
//               return (
//                 <tr key={i + 1}>
//                   <td>{i + 1}</td>
//                   <td><img src={result.image_url}/></td>
//                   <td>{result.title}</td>
//                   <td>
//                     {result.author}
//                   </td>
//                   <td>{result.isbn}</td>
//                 </tr>
//                 );
//             })
//           }
//           </tbody>
//         </table>
//         </div>
//         </div>
//       : null}
//     </div>
//   );
// };

// export default Lent;