export default function Blog() {
  const blogs = [
    {
      title: "Ayurveda for Modern Life",
      desc: "Discover how Ayurveda practices can be integrated into today's busy lifestyle.",
    },
    {
      title: "Panchakarma Explained",
      desc: "Learn the science and benefits behind this ancient cleansing process.",
    },
    {
      title: "Herbs for Everyday Wellness",
      desc: "Explore commonly used Ayurvedic herbs and their health benefits.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {blogs.map((b) => (
          <div
            key={b.title}
            className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{b.desc}</p>
            <a
              href="#"
              className="mt-4 inline-block text-primary font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
