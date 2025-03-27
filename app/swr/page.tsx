"use client";
import useSWR from "swr";

// Fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  console.log("response : ", response);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default function page() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/albums",
    fetcher
  );
  console.log("data : ", data);

  if (error)
    return <div className="text-red-500">❌ Failed to load user data</div>;
  if (isLoading) return <div className="text-blue-500">⏳ Loading...</div>;

  return (
    <div className=" w-10/12 mt-7 mx-auto p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-semibold">User Profile</h2>
      <div className="grid grid-cols-4 gap-5">
        {data?.map((params: any, idx: number) => (
          <div key={idx} className="border border-gray-300 p-4 rounded-lg">
            <p className="mt-2">👤 id : {params.id}</p>
            <p>📧 userId : {params.userId}</p>
            <p>title : {params.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
