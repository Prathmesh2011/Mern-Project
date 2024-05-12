import React from 'react'

function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
                 Welcome to this blog! This platform is dedicated to sharing thoughts and ideas about various books and literature.
            </p>
            <p>
                 Whether you're an avid reader or just getting started on your reading journey, you'll find insightful book reviews, recommendations, and discussions here.
            </p>
            <p>
                 Dive into different genres, explore new authors, and uncover hidden literary gems.
            </p>
            <p>
                 Join the conversation by leaving comments, sharing your own reading experiences, and connecting with fellow book enthusiasts. Let's embark on a journey through the fascinating world of literature together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
