const stars = Array.from({ length: 40 }, () => ({
  top: `${Math.floor(Math.random() * 100)}%`,
  left: `${Math.floor(Math.random() * 100)}%`,
  delay: `${Math.random() * 3}s`,
  size: Math.random() * 2 + 1,
}));

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[150px]" />

      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />

      {stars.map((star, index) => (
        <div
          key={index}
          className="star absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}