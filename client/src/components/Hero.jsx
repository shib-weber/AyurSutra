import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900">
            Transforming Ayurveda with Technology.
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-black">
            AyurSutra is a comprehensive software solution designed to
            streamline the management of Ayurveda and Panchakarma centers,
            enhancing efficiency and patient care.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="h-10 min-w-[84px] rounded-lg bg-[#007f80] px-4 text-sm font-bold text-white border border-[#007f80] transition-colors duration-300 hover:bg-white hover:text-[#007f80]"
            onClick={()=>navigate('/register')}
            >
              Get Started With Therapy 
            </button>
            <button onClick={()=>navigate('/register')} className="h-10 min-w-[84px] rounded-lg border border-[#007f80] px-4 text-sm font-bold text-[#007f80] transition-colors duration-300 hover:bg-[#007f80] hover:text-white">
              Login
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] rounded-xl bg-cover bg-center shadow-lg hover:shadow-[#007f80] transition-all"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4AmVMYkJJ9JUObQSIyodWmhRmSazJXGUasTr7qfbvVmPm7NOx5IoDQItiy78mIF_hB92_v0o3IscdZyLOKlpOIBVi4-qthPzM4fBsTI9yxRYf9iLQyYo62zj54_HDtW8uxcOMAjmMamRymRcvLrcNH_nYsl-nkPjbJWvK05nkSChUH5O1Dm4EZ_s9WzqH-A9I8KRs8zckyVYUEEOeAwnGN-9uSWqfy9SfZ4oHlgkwM0FZhA0658xDr2YLW2ZN0lBN3CYVWZltvxk")',
          }}
        />
      </div>
    </section>
  );
}
