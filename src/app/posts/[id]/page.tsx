'use client'
import React from 'react'
import Image from 'next/image'
import Comment from '@/components/Comment'
import AuthorCard from '@/components/AuthorCard'

const posts = [
    {
        id:"1",
        title:"Simple DMAS Calculator",
        description:"It is a Simple DMAS Calculator made by using HTML, CSS and Typescript.",
        image:"/images/dmas.png"
    },
    {
      id:"2",
      title:"TODO List",
      description:"It is a TODO List Generator made by using NextJS, TailwindCSS and Typescript.",
      image:"/images/todo.png"
  },
  {
    id:"3",
    title:"Countdown Timer",
    description:"It is a Countdown Timer made by using NextJS, TailwindCSS and Typescript.",
    image:"/images/cd timer.png"
},
{
  id:"4",
  title:"Personal Portfolio 1",
  description:"It is a Personal Portfolio 1 made by using NextJS, TailwindCSS and Typescript.",
  image:"/images/pf1.png"
},
{
  id:"5",
  title:"My Personal Portfolio 2",
  description:"It is a My Portfolio 2 made by using NextJS, Custom CSS and Typescript.",
  image:"/images/pf2.png"
},
{
  id:"6",
  title:"Icecreamo E-commerce Website",
  description:"It is an Icecreamo E-commerce Website made by using NextJS, TailwindCSS and Typescript.",
  image:"/images/icecreamo.png"
}
];

export default function Post({params} : {params : {id : string}}) {
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center text-red-700 mt-10'>Post Not Found</h2>
    );
  }
  const renderParagraphs= (description:string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='text-3xl md:text-5xl font-bold text-center text-blue-800'>{post.title}</h1>
      {post.image && (
        <Image 
        src={post.image}
        alt={post.title}
        width={700}
        height={700}
        className='w-full h-auto rounded-lg mt-7 '/>
      )}

      <div className='mt-7 text-lg text-slate-800'>
        {renderParagraphs(post.description)}
      </div>

      <Comment postId={post.id}/>
      <AuthorCard/>
    </div>
  )
}
