import { useNavigate } from "react-router-dom";

function Goals() {
  const navigate = useNavigate();

  const handleGoalSelection = (goal: string) => {
    navigate("/insights", { state: { goal } });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h2 className="text-xl font-bold mb-4">What is your goal?</h2>
      <div className="flex gap-4">
        <button
          onClick={() => handleGoalSelection("lead_conversion")}
          className="p-2 bg-green-500 text-white rounded"
        >
          Lead Conversion
        </button>
        <button
          onClick={() => handleGoalSelection("user_engagement")}
          className="p-2 bg-purple-500 text-white rounded"
        >
          User Engagement
        </button>
      </div>
    </div>
  );
}

export default Goals;
