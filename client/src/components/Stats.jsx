export default function Stats() {
  const stats = [
    { label: "Total Registrations", value: "10,000+" },
    { label: "Total Doctors", value: "500+" },
    { label: "Total Therapies", value: "2,000+" },
    { label: "Services Available", value: "350+" },
  ];

  return (
    <section className="bg-primary/10 bg-[#007f80]/20 py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold text-[#007f80]">{stat.value}</h3>
            <p className="text-gray-900 ">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
