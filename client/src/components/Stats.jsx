export default function Stats() {
  const stats = [
    { label: "Registered Users", value: "10,000+" },
    { label: "Therapies Offered", value: "100+" },
    { label: "Wellness Plans", value: "50+" },
    { label: "Services Available", value: "200+" },
  ];

  return (
    <section className="bg-primary/10 dark:bg-primary/20 py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
