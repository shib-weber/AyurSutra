// PatientHome.jsx
import React from "react";

const PatientHome = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/20 bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:bg-background-dark/80 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Wellness Co.</h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Services</a>
          <a className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Doctors</a>
          <a className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Blog</a>
          <a className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">About Us</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90">
            <span className="truncate">Book Now</span>
          </button>
          <button className="h-10 w-10 overflow-hidden rounded-full">
            <img
              alt="User profile picture"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt5hvl94oUCrpGDNiCqlVjd0fyPqq_UGWvcbK6WzrZNQ-fqS9_alfhtNlfcrLtEfDyHKftSwB1hDdG6wh4SXNX4pMu-55qqd4qdhqxwygRlHGlGuporG2bAOjWc-biFQjf0Wc1vqgUw_8-TIt_4lKgkT6QC3LAWZBFGuXjOQUTxkDo-gMl2xTUzFrLda2N2aCJjmXrRRvzhqaQXSTvjj8uKCvlbseuq8jFlvqZCxG_UYKa7Fpp8IpQz00xtXzGghJvqVmTjDZMHJw"
            />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWX1Nrf30TWgk3UlILItTpP5LCX6JS1dXO5sQTj3b_AJb0Ocu68puqDHoxxcBLq07tLm0PUwg0uQ1Cw3vtxJY3VJq1g7M_T7vF-LVl1vBXa2LFSwvMPSprAXHcSoTpe5SUb4rg4V1i6WqAYBqlv5rRZY7lD8LrSvkoT-f-zF5tUDvWqkKJaJflEAr-mwVGcfTANG1okYKcjtLbobdqDxx83yVHAbFG7hwylpD8eAs2ve3LZSIhBOch5nR-VhbabTXzsz1uFyS8L-s")',
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-6xl">
              Your Path to Wellness Starts Here
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-200">
              Discover a sanctuary of healing and rejuvenation. Our expert team is dedicated to guiding you on your journey
              to optimal health and well-being.
            </p>
            <button className="mt-8 rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105">
              Book Now
            </button>
          </div>
        </section>

        {/* Therapies Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Therapies
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {/* Therapy Cards */}
              {[
                {
                  title: "Acupuncture",
                  desc: "Restore balance and energy flow.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF_9CqVW5bvfIvap5eqxlX2ET_dM9nVb9B1VGeZ4hpZ7vCHrdT0DyTP5uNen3n81aBv3Fnz8e2xy7emMWObCHv4S9sax6_GklNTO1dweqSCjnwmU2f-eYNvO2PKnSfNy5rS6TLuCHVNbimZkAImh6aC-A2j1Bnylx0DN1w5oxtViI2bm11mcK2w1dKfEPCZDK8w1L2K2T_VgbUCfbQiHLZjYLr2OCgRv_cRA5Egi67QgfyJwFYuUBOlvtpgHGimTtMiEb11pfqWdw",
                },
                {
                  title: "Massage Therapy",
                  desc: "Relieve tension and promote relaxation.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3CMw8v0Zofuy1Ousk_Jt7H_O3h4N0B1cdH3HIG3cep6IaX7qYEss5cSpduciW2C-VXeXvMuM1fkBejKL5jnbKomKwQPkP3w1TJvZQ4yLbYNWAAsIlRczcVpqUomyQOrGRgQtfqXOgfBDzuKj2A1pDWj3vbMOTsDwUM9-x5uOa9upCxjp8tvzw8K8BOzIqxk6VAiuvCAgmqdahsbkgpr2Cz6bmTmVsrjBYM4SQ2dELMWZAnpTZ7u10lOD4ovH8Nzz4S2dICTNkRs",
                },
                {
                  title: "Chiropractic Care",
                  desc: "Improve spinal health and function.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3jAH_A_QjvmjAYCAkHK6no9AWSPa46LmMA5FrwUW6fgFshUQu2Dz5yiwwQi11iAv-5-383JKjdvnAY2xjodxMt0lV-kytpWunGhjN739V7G3Y98Im7O75NO3K_Gd9OosEV0NqzbMRyrleG2ey8uLo0Rg_kUQPMrw3gGugRby6A2o-wdH-fR37nZYPDQyCvfR0GbhWfzXbcUkO5ATKT1f4ia4FbwuavI3eWGjqlKeD1fBjK4iJd6eEyHKW5c_9DSerQYnqNP_leBA",
                },
                {
                  title: "Nutritional Counseling",
                  desc: "Optimize health with personalized guidance.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRNiAIhWFguq6l8U3gumCMc5g3vC0DwsnnFx6hXWYdMdNqi43ibAkbzYAyO49Ey-g_Eu3OHViJTdIb-SMQKSe9n1mF8n299eiwJSIk8UO04z6VFXEnvGY477wRB3x03VjNDfQD4a477QFwGvGjb42zvzSKhNHI778XYKvLNOrcAbdjsEpl9me043RuZvpgCAXS2B134QVlvl7Ep7iuJ83x7iVAuibdci-G7sN8Wj4NidzPSRuX7RK7bp02Hu8U2-He7KNz4uCDqIc",
                },
                {
                  title: "Mental Wellness",
                  desc: "Support your mental and emotional well-being.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Udgzgztr3f5Tiu6WW4dP7KRZJ4B0EE32fd1GxLpTHKKOg95tXenbmIxJbSYzj21Nn1zTVMALZZVxN81GQNV9rcWKBUAi607KVk-UM_mmJOBDBWdc5ZO88mie08ATkKneuC3ZiYRb4HPhXGeNIn7bJ0jUMuCiqVbpO4-HyBUJWkjCf-rDE2AxW1VyGP-eUNL7UuUU7XYlJH0yDbAOUrs0X99zp_J_v4GAacfR7uN-2oHVj4ZZUf4iIIIE9g723XA30Eu3U-EOTHw",
                },
              ].map((therapy, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="aspect-square w-full overflow-hidden rounded-lg">
                    <img
                      alt={therapy.title + " therapy"}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      src={therapy.img}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{therapy.title}</h3>
                    <p className="text-sm text-primary">{therapy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Remaining sections like Doctors, Blog, FAQ, CTA, Footer */}
        {/* You can follow the same pattern: map over arrays for repeated items */}
      </main>
    </div>
  );
};

export default PatientHome;
