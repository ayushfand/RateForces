export default function HowToUse() {
  return (
    <div id="how" className="mt-20 text-center text-white">

      <h2 className="text-3xl font-bold mb-10">How To Use</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-green-400 text-xl font-semibold">1. Select Contest</h3>
          <p className="text-gray-400 mt-2">Choose any past Codeforces contest.</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-green-400 text-xl font-semibold">2. Search Handle</h3>
          <p className="text-gray-400 mt-2">Find your rank, score & solving speed.</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-green-400 text-xl font-semibold">3. Get Rating</h3>
          <p className="text-gray-400 mt-2">See predicted changes instantly.</p>
        </div>

      </div>

    </div>
  );
}