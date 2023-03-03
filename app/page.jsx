"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { generateFakeUsers } from "@/utils/generateFakeUsers";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import Pagination from "@/components/Pagination";

export default function Home() 
{
  const [data, setData] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(9)

  useEffect(() => 
  {
    const dataArr = generateFakeUsers(30)
    setData(dataArr)
  }, [])

  const lastPostIndex = postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)

  return (
    <section className="bg-black">
      <Navbar />
      <main className="mx-auto min-h-screen text-left">
        <div className="px-8 py-12 sm:px-28 md:px-64 md:py-52">
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
          <h1 className="text-white  text-3xl font-bold">
            Testimonials
          </h1>
          <div className="mx-auto">
          <Cards 
           data={currentPosts}
          />
          <Pagination 
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}/>
          </div>
        </div>
      </main>
      <Footer isDark={false} />
    </section>
  )
}
