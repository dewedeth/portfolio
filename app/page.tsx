import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <section className="bg-black">
      <Navbar />
      <main className="mx-auto min-h-screen text-left">
        <div className="px-8 py-64 sm:px-28 md:px-64 md:py-52">
          <h1 className="pb-4 text-4xl font-bold text-white md:text-6xl">
            Yousef Abdelkhaleq.
          </h1>
          <p className="text-xl font-semibold text-white md:pb-1 md:text-3xl">
            Freelance developer and web content creator.
          </p>
          <p className="text-lg  text-neutral-300  md:text-xl">
            Passionate about developing software for an easier and meaningful
            living.
          </p>
        </div>
      </main>
      <Footer isDark={false} />
    </section>
  )
}
