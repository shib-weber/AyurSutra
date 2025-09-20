export default function Offerings() {
  const offerings = [
    {
      title: "Therapies",
      desc: "Explore a variety of Ayurvedic therapies tailored to individual needs.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBMq8BM2Tr-B9n8SxEX2LH2zaSdp3HeRAAL7dju7UqQz8eyw_rC0Qzn5bMTDk4lY6C8wAHYCi1J0fylnme6DGoLDABdf0YQpit6PHJ3fyQheg2efadwx5b-T3r4lMs3f8RCDPrWHkCHVW87iXTZ_Ntilr4rxBR055iq_Oq2V9b8sR3SzbfL7v7EB5U0dYD_yb4CSiUcKdTX1MQiOOumQVyzJ3eIQO5sb8cU7JVQV0ZAgrS_8yiS8E2JQ8a66e7-iTEcrJ0fg-iISSU"
    },
    {
      title: "Wellness Plans",
      desc: "Discover comprehensive wellness plans for holistic health and well-being.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCbJU4CzQSet0tUOmDRGajbvGThO2jZapmwStIi9Z8yPqtW9jaLlQpwr5p7kMjqiek8bsuGnRYdVVRnD3Q2fiU7BqkWnYVvN4s_gbMFro9A5pygz55oA0gDQED-FotcX1MbYGBEnHJdcMsVScR_s9DhSHc8_jsI64gaR_1GmvHpxtf4aS1fUfDTaq8nrvP6ZTnOFXF0Y0Xjbjolapit9dLsmkQ1Tiv10PBo9ntGJAIls9sdzCJKsES3oWOc9Ey86YQOVGwTNAxR7Hs"
    },
    {
      title: "Services",
      desc: "Access a range of services including consultations, treatments, and more.",
      img:"https://lh3.googleusercontent.com/aida-public/AB6AXuD_oZ6OCcezern_I9FpLQjef1IC1SC1tNrB7GkP-3Ucm0ar6CK6vlR4K3PUpo2iUumFGslfC5l4ojTgNbIN8w3ZKSCZTrExCYsA7FVwl5KUHx7oDoGJ9hyHS_P6hjF8S2pcFU-wHUZQ1fSs-IdeKUt9s5kPg2gciidQ7wXDiuAuJzJEe6ISXsTSMz3KzhqEioT-LW2AXfAuGcLsVvhtsgfN1ltGnuzIw-wk9qk0KA7-ffyXVdb-CwJKAWm7vSiljMhkobYrG4fyndg"
    },
  ];

  return (
    <section className="bg-primary/10 bg-[#007f80]/20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Our Offerings</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-xl bg-white  p-6 shadow-md hover:shadow-xl hover:shadow-[#007f80] transition"
            >
              <img className="rounded-2xl mb-2" src={o.img} alt="" />
              <h3 className="text-xl text-black font-semibold mb-3">{o.title}</h3>
              <p className="text-gray-900 ">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
