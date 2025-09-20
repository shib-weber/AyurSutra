export default function WhyChooseUs() {
  const features = [
    {
      title: "Comprehensive Therapy Management",
      desc: "Easily manage and schedule a variety of therapies with detailed tracking and history.",
    },
    {
      title: "Personalized Wellness Plans",
      desc: "Create and monitor tailored wellness plans for each individual to achieve optimal health.",
    },
    {
      title: "Diverse Service Offerings",
      desc: "Provide a wide range of services including Panchakarma, yoga, and dietary consultations.",
    },
    {
      title: "User-Friendly Interface",
      desc: "Enjoy an intuitive and accessible platform designed for both practitioners and patients.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
