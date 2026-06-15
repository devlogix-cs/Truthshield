export default function StatsCards() {
  const stats = [
    { title: "Articles", value: "44K+" },
    { title: "Accuracy", value: "95%" },
    { title: "OCR", value: "Ready" },
    { title: "Groq AI", value: "Online" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
        >
          <div className="text-3xl font-bold text-blue-400">
            {item.value}
          </div>

          <div className="text-slate-400 mt-2">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}