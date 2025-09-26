// PatientHome.jsx
import React from "react";
import Header from "../../components/PatientHeader";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
const PatientHome = () => {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen w-full  bg-gray-50">
      {/* Sidebar */}
      <Sidebar />


      {/* Main */}
      <main className="flex-grow ml-2 mb-2 mt-2 mr-2">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center px-4 py-16 text-white sm:py-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWX1Nrf30TWgk3UlILItTpP5LCX6JS1dXO5sQTj3b_AJb0Ocu68puqDHoxxcBLq07tLm0PUwg0uQ1Cw3vtxJY3VJq1g7M_T7vF-LVl1vBXa2LFSwvMPSprAXHcSoTpe5SUb4rg4V1i6WqAYBqlv5rRZY7lD8LrSvkoT-f-zF5tUDvWqkKJaJflEAr-mwVGcfTANG1okYKcjtLbobdqDxx83yVHAbFG7hwylpD8eAs2ve3LZSIhBOch5nR-VhbabTXzsz1uFyS8L-s")',
          }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your Path to Wellness Starts Here
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base font-light text-gray-200 sm:text-lg md:text-xl">
              Discover a sanctuary of healing and rejuvenation. Our expert team
              is dedicated to guiding you on your journey to optimal health and
              well-being.
            </p>
            <button onClick={()=>{navigate('/appointment')}} className="mt-8 rounded-lg bg-[#007f80] px-6 py-3 text-base font-bold text-white transition-transform hover:scale-105 sm:px-8 sm:text-lg">
              Book Now
            </button>
          </div>
        </section>

        {/* Therapies Section */}
        <section className="py-14 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-gray-900 sm:mb-12 sm:text-3xl md:text-4xl">
              Our Therapies
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                <div
                  key={idx}
                  className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg hover:shadow-blue-700 transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-md">
                    <img
                      alt={therapy.title + " therapy"}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      src={therapy.img}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {therapy.title}
                    </h3>
                    <p className="text-sm text-[#007f80]">{therapy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placeholder for more sections (Doctors, Blog, FAQ, etc.) */}
      </main>
    </div>
  );
};

export default PatientHome;
