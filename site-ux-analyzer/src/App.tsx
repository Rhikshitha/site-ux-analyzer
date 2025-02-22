import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image || url) {
      navigate("/goals");
    } else {
      alert("Please upload an image or enter a URL.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Upload an Image or Enter a URL</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        />
        <input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </form>
    </div>
  );
}

export default App;
