        import PredictionCard from "./components/PredictionCard";
        import AIAnalysisCard from "./components/AIAnalysisCard";
        import ImageUpload from "./components/ImageUpload";
        import { useState } from "react";
        function App() {
          const [newsText, setNewsText] = useState("");
          const [prediction, setPrediction] = useState("");
const [confidence, setConfidence] = useState(0);
const [analysis, setAnalysis] = useState("");
        const analyzeNews = async () => {
  try {
    const formData = new FormData();

    formData.append("text", newsText);
    formData.append("include_ai", "true");

    const response = await fetch(
      "http://127.0.0.1:4000/api/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log("API RESPONSE:", data);

    const results = data.model_results || [];

    // Extract AI Analysis
    const aiStartIndex = results.findIndex(
      (line: string) =>
        line.includes("AI Analysis")
    );

    if (aiStartIndex !== -1) {
      const aiContent = results
        .slice(aiStartIndex)
        .join("\n");

      setAnalysis(aiContent);

      // Final verdict from AI
      if (
        aiContent.toUpperCase().includes("FAKE")
      ) {
        setPrediction("FAKE NEWS");
        setConfidence(95);
      } else if (
        aiContent.toUpperCase().includes("REAL") ||
        aiContent.toUpperCase().includes("TRUE")
      ) {
        setPrediction("REAL NEWS");
        setConfidence(95);
      }
    }

  } catch (err) {
    console.error(err);
  }
};
          return (
            <div className="min-h-screen bg-white">
              <div className="max-w-6xl mx-auto px-8 py-16">

                <div className="mb-16">
                  <h1 className="text-6xl font-semibold tracking-tight text-black">
                    TruthShield AI
                  </h1>

                  <p className="text-gray-500 text-xl mt-4">
                     AI + Machine Learning Powered Fact Verification
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

                    <h2 className="text-2xl font-semibold text-black mb-6">
                      News Input
                    </h2>

                    <textarea
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
          className="w-full h-44 border border-gray-200 rounded-2xl p-4 outline-none"
          placeholder="Paste news article..."
        />

                    <input
                      className="w-full mt-4 border border-gray-200 rounded-2xl p-4 outline-none"
                      placeholder="Paste URL..."
                    />

                    <div className="mt-4">
                      <ImageUpload />
                    </div>

                  <button
          onClick={analyzeNews}
          className="w-full mt-6 bg-black text-white rounded-2xl py-4 font-medium"
        >
          Analyze News
        </button>
                  </div>

                 <PredictionCard
  prediction={prediction}
  confidence={confidence}
/>

                </div>

                <div className="mt-8">
                 <AIAnalysisCard
  analysis={analysis}
/>
                </div>

              </div>
            </div>
          );
        }

        export default App;
        