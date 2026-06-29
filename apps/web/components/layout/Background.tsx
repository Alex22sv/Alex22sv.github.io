export function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-3xl" />

      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
}