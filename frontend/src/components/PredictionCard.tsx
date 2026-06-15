type Props = {
  prediction: string;
  confidence: number;
};

export default function PredictionCard({
  prediction,
  confidence,
}: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

      <h2 className="text-2xl font-semibold mb-6">
        Final Verdict
      </h2>

      <div
        className={`text-5xl font-semibold ${
          prediction === "REAL NEWS"
            ? "text-green-600"
            : prediction === "FAKE NEWS"
            ? "text-red-600"
            : "text-gray-400"
        }`}
      >
        {prediction || "WAITING"}
      </div>

      <div className="text-gray-500 mt-4">
        Confidence: {confidence.toFixed(2)}%
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
        <div
          className={`h-3 rounded-full ${
            prediction === "REAL NEWS"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${confidence}%`,
          }}
        />
      </div>

      <div className="mt-6 text-sm text-gray-500">
        Verified using AI + Machine Learning
      </div>

    </div>
  );
}