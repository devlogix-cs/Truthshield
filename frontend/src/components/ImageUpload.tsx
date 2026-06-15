export default function ImageUpload() {
  return (
    <div className="border-2 border-dashed border-slate-600 rounded-2xl p-8 text-center mt-4">

      <div className="text-4xl mb-3">
        🖼️
      </div>

      <h3 className="font-semibold">
        Upload News Screenshot
      </h3>

      <p className="text-slate-400 text-sm mt-2">
        Drag & Drop or Click to Upload
      </p>

      <input
        type="file"
        className="mt-4"
      />
    </div>
  );
}