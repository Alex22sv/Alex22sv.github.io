export function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute left-[-150px] top-[-120px] h-[500px] w-[500px] rounded-full bg-violet-600/25 blur-[150px]" />

      <div className="absolute right-[-150px] top-[150px] h-[450px] w-[450px] rounded-full bg-fuchsia-600/20 blur-[160px]" />

      <div className="absolute bottom-[-150px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[170px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_70%)]" />

    </div>
  );
}