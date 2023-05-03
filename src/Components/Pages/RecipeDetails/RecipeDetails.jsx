// import React, { useEffect, useState } from 'react';
// import SingleDataDetails from '../SingleDataDetails/SingleDataDetails';
// import { useLoaderData, useParams } from 'react-router-dom';

// const RecipeDetails = () => {

//     const allData =useLoaderData();
// //   const [allData, setAllData] = useState([]);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     fetch(`https://b7a10-chef-recipe-hunter-server-side-rafsanfaruk-rafsanfaruk.vercel.app/data/${id}`)
// //       .then((res) => res.json())
// //       .then((data) => setAllData(data))
// //       .catch((err) => console.log(err));
// //   }, [id]);

//   return (
//     <div>
//       {allData?.map((data) => (
//         <SingleDataDetails key={data?.id} data={data}></SingleDataDetails>
//       ))}
//     </div>
//   );

// };


// export default RecipeDetails;
