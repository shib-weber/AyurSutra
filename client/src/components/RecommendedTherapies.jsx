import React from "react";

const therapies = [
  {
    id: 1,
    name: "Panchakarma",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3CMw8v0Zofuy1Ousk_Jt7H_O3h4N0B1cdH3HIG3cep6IaX7qYEss5cSpduciW2C-VXeXvMuM1fkBejKL5jnbKomKwQPkP3w1TJvZQ4yLbYNWAAsIlRczcVpqUomyQOrGRgQtfqXOgfBDzuKj2A1pDWj3vbMOTsDwUM9-x5uOa9upCxjp8tvzw8K8BOzIqxk6VAiuvCAgmqdahsbkgpr2Cz6bmTmVsrjBYM4SQ2dELMWZAnpTZ7u10lOD4ovH8Nzz4S2dICTNkRs",
    desc: "Detoxifying therapy for overall health."
  },
  {
    id: 2,
    name: "Shirodhara",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3jAH_A_QjvmjAYCAkHK6no9AWSPa46LmMA5FrwUW6fgFshUQu2Dz5yiwwQi11iAv-5-383JKjdvnAY2xjodxMt0lV-kytpWunGhjN739V7G3Y98Im7O75NO3K_Gd9OosEV0NqzbMRyrleG2ey8uLo0Rg_kUQPMrw3gGugRby6A2o-wdH-fR37nZYPDQyCvfR0GbhWfzXbcUkO5ATKT1f4ia4FbwuavI3eWGjqlKeD1fBjK4iJd6eEyHKW5c_9DSerQYnqNP_leBA",
    desc: "Relaxation therapy for mental peace."
  }
];

const RecommendedTherapies = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-black  mb-4">
        Recommended Therapies
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {therapies.map(t => (
          <div
            key={t.id}
            className="bg-white  p-4 rounded-lg shadow shadow-emerald-900"
          >
            <img src={t.image} alt={t.name} className="w-full h-40 object-cover rounded-md" />
            <h4 className="text-lg font-bold mt-3 text-black ">
              {t.name}
            </h4>
            <p className="text-gray-900  text-sm mt-2">
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTherapies;
