export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
            Transforming Ayurveda with Technology.
          </h1>
          <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
            AyurSutra is a comprehensive software solution designed to streamline the management of Ayurveda and Panchakarma centers, enhancing efficiency and patient care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="h-12 min-w-[120px] rounded-lg bg-primary px-6 text-base font-bold text-white hover:opacity-90">
              Sign Up
            </button>
            <button className="h-12 min-w-[120px] rounded-lg border border-primary bg-primary/10 px-6 text-base font-bold text-primary hover:bg-primary hover:text-white dark:bg-primary/20">
              Login
            </button>
          </div>
        </div>
        <div
          className="aspect-square w-full lg:h-[400px] rounded-xl bg-cover bg-center shadow-lg"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4AmVMYkJJ9JUObQSIyodWmhRmSazJXGUasTr7qfbvVmPm7NOx5IoDQItiy78mIF_hB92_v0o3IscdZyLOKlpOIBVi4-qthPzM4fBsTI9yxRYf9iLQyYo62zj54_HDtW8uxcOMAjmMamRymRcvLrcNH_nYsl-nkPjbJWvK05nkSChUH5O1Dm4EZ_s9WzqH-A9I8KRs8zckyVYUEEOeAwnGN-9uSWqfy9SfZ4oHlgkwM0FZhA0658xDr2YLW2ZN0lBN3CYVWZltvxk")' }}
        />
      </div>
    </section>
  );
}
