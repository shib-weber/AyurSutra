const therapies = [
  // 🔹 Main Panchakarma (keep your URL)
  {
    id: 1,
    name: "Panchakarma",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3CMw8v0Zofuy1Ousk_Jt7H_O3h4N0B1cdH3HIG3cep6IaX7qYEss5cSpduciW2C-VXeXvMuM1fkBejKL5jnbKomKwQPkP3w1TJvZQ4yLbYNWAAsIlRczcVpqUomyQOrGRgQtfqXOgfBDzuKj2A1pDWj3vbMOTsDwUM9-x5uOa9upCxjp8tvzw8K8BOzIqxk6VAiuvCAgmqdahsbkgpr2Cz6bmTmVsrjBYM4SQ2dELMWZAnpTZ7u10lOD4ovH8Nzz4S2dICTNkRs",
    desc: "The 5-fold detoxifying therapy (Vamana, Virechana, Basti, Nasya, Raktamokshana) for body purification.",
  },

  // 🔹 Purva Karma (Preparatory Therapies)
  {
    id: 2,
    name: "Abhyanga",
    // reliable dynamic image from Unsplash (oil massage / ayurveda)
    image: "https://adyantayurveda.com/wp-content/uploads/2025/01/Shiroabhyanga-A-Deep-Dive-into-the-Ancient-Ayurvedic-Head-Massage.jpg",
    desc: "Full-body warm herbal oil massage to loosen toxins and nourish the skin.",
  },
  {
    id: 3,
    name: "Swedana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBjODoekBlhSckq8I1yccAF9umq3RgmTwlA&s",
    desc: "Herbal steam therapy to induce sweating and open body channels.",
  },
  {
    id: 4,
    name: "Snehana",
    image: "https://aayushreeayurved.com/wp-content/uploads/2023/06/sehan.jpg",
    desc: "Oleation therapy using medicated ghee and oils, internal and external.",
  },

  // 🔹 Supportive / Popular Therapies (keep your Shirodhara URL)
  {
    id: 5,
    name: "Shirodhara",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3jAH_A_QjvmjAYCAkHK6no9AWSPa46LmMA5FrwUW6fgFshUQu2Dz5yiwwQi11iAv-5-383JKjdvnAY2xjodxMt0lV-kytpWunGhjN739V7G3Y98Im7O75NO3K_Gd9OosEV0NqzbMRyrleG2ey8uLo0Rg_kUQPMrw3gGugRby6A2o-wdH-fR37nZYPDQyCvfR0GbhWfzXbcUkO5ATKT1f4ia4FbwuavI3eWGjqlKeD1fBjK4iJd6eEyHKW5c_9DSerQYnqNP_leBA",
    desc: "Continuous pouring of warm oil on the forehead for deep relaxation and stress relief.",
  },
  {
    id: 6,
    name: "Kati Basti",
    image: "https://www.deepayurveda.in/cdn/shop/files/Kati_Vasti_Panchkarma_Therapy_in_Mohali.png?v=1746021208&width=2000",
    desc: "Localized oil pooling therapy on the lower back for pain relief.",
  },
  {
    id: 7,
    name: "Pinda Sweda",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT84hQb5bpxDU9LrHVU5Arju151ijUOg3POA&s",
    desc: "Herbal bolus massage using medicated rice or herbs wrapped in cloth for rejuvenation.",
  },

  // 🔹 Paschat Karma (Post-Therapies) — kept Rasayana image that you said worked
  {
    id: 8,
    name: "Rasayana",
    image:
      "https://adyantayurveda.com/wp-content/uploads/2025/01/Pinda-Swedam-A-Comprehensive-Guide-to-Traditional-Ayurvedic-Therapy.jpg",
    desc: "Rejuvenation therapy using herbs, tonics, and lifestyle changes for long-term health.",
  },
  {
    id: 9,
    name: "Pathya-Apathya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKvxEx6o-1e3QiSD7ZJf8NCO4iD8aXcLorsZ0lhqrsNG283C35eBpcM1iQO_8O5gPLZs&usqp=CAU",
    desc: "Dietary regulations after Panchakarma to restore digestion and immunity.",
  },
  {
    id: 10,
    name: "Yoga & Meditation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByvYKSP4uzCjLbZDYZnFay8r4e80WKSDU_A&s",
    desc: "Holistic practices to balance mind, body, and soul after detoxification.",
  },
];

export default therapies;
