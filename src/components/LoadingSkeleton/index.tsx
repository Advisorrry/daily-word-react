export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 sm:p-2">
      <div className="mt-auto flex gap-3 justify-around">
        <div className="bg-indigo-400 w-40 h-10 animate-pulse rounded-full"></div>
        <div className="bg-indigo-400 w-40 h-10 animate-pulse rounded-full"></div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="bg-indigo-400 w-full animate-pulse h-14 rounded-2xl"></div>
        <div className="bg-indigo-400 w-full animate-pulse h-5 rounded-2xl"></div>
      </div>
    </div>
  )
}
