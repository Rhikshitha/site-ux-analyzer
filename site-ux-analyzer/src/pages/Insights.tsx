import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Insights() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">Site UX Analysis</h1>
      <div className="p-4 border rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold">{data?.title}</h2>
        <p>{data?.body}</p>
      </div>
    </div>
  );
}

export default Insights;
