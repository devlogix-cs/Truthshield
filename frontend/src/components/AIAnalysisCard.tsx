type Props = {
  analysis: string;
};

export default function AIAnalysisCard({
  analysis,
}: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

      <h2 className="text-2xl font-semibold mb-4">
        AI Analysis
      </h2>

      <p className="text-gray-600 whitespace-pre-wrap">
        {analysis ||
          "Analysis will appear here..."}
      </p>

    </div>
  );
}