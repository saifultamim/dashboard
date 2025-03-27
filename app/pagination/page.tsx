// "use client";
// import React, { useEffect, useState } from "react";
// import { product } from "./server-action";

// const page = () => {
//   const [value, setValue] = useState([]);
//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/albums"
//         );
//         const data = await response.json();
//         console.log(data);
//         setValue(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     })();
//   }, []);

//   console.log(" value : ", value);

//   return (
//     <div className="w-10/12 mt-7 mx-auto">
//       <div className="grid grid-cols-4 gap-6">
//         {value?.map((params: any, idx: number) => (
//           <div key={idx} className="border border-red-600 gap-4 p-4">
//             <p>Id : {params.id}</p>
//             <p>userId : {params.userId}</p>
//             <p>title : {params.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Define how many items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${pageSize}`
        );
        const data = await response.json();
        const totalItems = response.headers.get("X-Total-Count") || 100; // Defaulting to 100
        setTotalPages(Math.ceil(Number(totalItems) / pageSize));
        setValue(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="w-10/12 mt-7 mx-auto">
      {/* Data Grid */}
      <div className="grid grid-cols-4 gap-6">
        {value?.map((params: any) => (
          <div key={params.id} className="border border-red-600 gap-4 p-4">
            <p>Id : {params.id}</p>
            <p>userId : {params.userId}</p>
            <p>title : {params.title}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
