export default function Offerings() {
  const offerings = [
    {
      title: "Therapies",
      desc: "Explore a wide range of Ayurvedic therapies to rejuvenate and heal.",
    },
    {
      title: "Wellness Plans",
      desc: "Personalized wellness plans tailored to your unique health needs.",
    },
    {
      title: "Services",
      desc: "Comprehensive services including Panchakarma, yoga, and more.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Offerings</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{o.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
