const Stats = () => {
  const stats = [
    { value: "500+", label: "Vessels Worldwide" },
    { value: "10,000+", label: "Seafarers & Employees" },
    { value: "50+", label: "Countries Served" },
    { value: "40+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-20 bg-[#01295d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
