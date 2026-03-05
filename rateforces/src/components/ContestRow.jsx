import ContestCard from "./ContestCard";

export default function ContestRow({ title, contests }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {contests.map((contest) => (
  <ContestCard key={contest.id} {...contest} />
))}
      </div>
    </div>
  );
}