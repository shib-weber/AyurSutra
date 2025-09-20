export default function WhyChooseUs() {
const features = [
  {
    title: "Easy Scheduling",
    desc: "Effortlessly manage appointments and schedules with our intuitive interface.",
    icon: (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007f80" className="w-6 h-6">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
    ),
  },
  {
    title: "Trusted Therapists",
    desc: "Connect with a network of verified and experienced Ayurvedic therapists.",
    icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#007f80"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#007f80]"
  >
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 
             1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 
             3-1.34 3-3S9.66 5 8 5 5 6.34 5 
             8s1.34 3 3 3zm0 2c-2.33 0-7 
             1.17-7 3.5V19h14v-2.5C15 
             14.17 10.33 13 8 13zm8 0c-.29 
             0-.62.02-.97.05 1.16.84 1.97 
             1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
    ),
  },
  {
    title: "Progress Tracking",
    desc: "Monitor patient progress and treatment effectiveness with detailed analytics.",
    icon: (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007f80" className="w-6 h-6">
    <path d="M5 9h3v11H5V9zm6-4h3v15h-3V5zm6 8h3v7h-3v-7z" />
  </svg>
    ),
  },
  {
    title: "Ayurvedic Wellness",
    desc: "Promote holistic wellness through personalized Ayurvedic practices and guidance.",
    icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-[#007f80]"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
             4.5 2.09C13.09 3.81 14.76 3 16.5 3 
             19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.54L12 21.35z" />
  </svg>
    ),
  },
];


  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-black text-center mb-6">Why Choose Us?</h2>
      <p className="text-black text-center">AyurSutra offers a range of features designed to enhance the management and delivery of Ayurvedic Service</p>
      <p className="text-black text-center mb-6"> delivery of Ayurvedic Service</p>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
  {features.map((f) => (
    <div
      key={f.title}
      className="rounded-xl bg-white text-black p-6 shadow-md hover:shadow-xl hover:shadow-[#007f80] transition flex flex-col items-center text-center gap-4"
    >
      {f.icon}
      <h3 className="text-xl font-semibold">{f.title}</h3>
      <p className="text-gray-900 ">{f.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
}
