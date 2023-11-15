import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
        {"abcdefghi".split('').map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}