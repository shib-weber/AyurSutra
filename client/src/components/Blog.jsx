export default function Blog() {
  const blogs = [
    {
      title: "The Benefits of Ayurvedic Therapies",
      desc: "Learn about the numerous health benefits of traditional Ayurvedic therapies.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCUqWf3H5wTZJUI2MuflwPLMpVvd81F8bZR0yrd5R-KdOuAveRz1eRtH7mKWJ9XosC0Fcz7vzBLQZHaRK2yh9j4czhvWq9ji_-JMk_SBjLdyu2hAkw3yBK9UtdJn25mfrfYFB5rIC_5pgNZux0fLHoUvjKoN6HResuiy1ZXVxLIbO5tW-_Z_NvWDbq_SfkuPQreJpkkB4usiZSuEav9Oc1O2r_23ApH90tH7yGQi_l13Z8-6ZW9FQyI4iC3D9JqBZgbJ0ca0ytl2XE"
    },
    {
      title: "Understanding Panchakarma",
      desc: "Explore the principles and practices of Panchakarma for detoxification and rejuvenation.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuD02EDNGkQjgDsU8d4uxH3Cy3MGEQKoOw44-gMofqmlB2Ar-8w9EKsy4p-BVa6Eg_Pj1SJzMFH6-YUT6W_UuISPA9mVeOzVnJucwuDSZ_FOJZNOg98I-ZzQF1TdPL6My6ar6V0DdwWt800p_D63l04eFFqac-msjcDxoTLrP8T7GV0Omvx6XyWzTTGRVUBVIE_99b74q7dfDPuzg7pigdchXkAjmygS-_nHfC5tnoNu-lytCBIEwA9ZqcurNKgogi50HZG2nImuWHE"
    },
    {
      title: "Integrating Ayurveda into Daily Life",
      desc: "Discover practical ways to incorporate Ayurvedic principles into your daily routine.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBSWnJ0Hc6T5xxuzPMhTenZdRXQOOOp3qmfonmkvgAg2DRwxLYGsl4zzn4Xg92o0c62rCfcOOod2DI898xErXF0-OgLa7Sr9FWHGNCjCeo-6yY_u635YC36UoiQn6dDh5Xixi-TBoe9USknekg8tCTZtd8honkzFutZAi0ryfdWgTUtt6nXKOAUU2XJ_BUDda-NPPS8wZgaE1z2lFAIMpesxsZ_UJlW6qk-eHZX_QF3sitj6aWDlZP0z0iZiFh2NuLZhDgqa7bnXT0"

    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-black text-center mb-12">From Our Blogs</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {blogs.map((b) => (
          <div
            key={b.title}
            className="rounded-xl bg-white  p-6 shadow-md hover:shadow-xl transition hover:shadow-[#007f80]"
          >
            <img className="rounded-2xl mb-2" src={b.img} alt="" />
            <h3 className="text-xl text-black font-semibold mb-3">{b.title}</h3>
            <p className="text-black ">{b.desc}</p>
            <a
              href="#"
              className="mt-4 inline-block text-primary font-semibold hover:underline text-[#007f80]"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
