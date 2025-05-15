import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>
          Get Ready to Ace Your Next Interview with AI-Powered Practice & Feedback.
        </h2>
        <p>
          Practice with AI is a revolutionary platform that uses advanced artificial intelligence to help you prepare for job interviews. Our AI-powered simulator generates personalized interview questions based on your resume and the job description, allowing you to practice in a realistic environment. With instant feedback and performance analysis, you can identify your strengths and weaknesses, and improve your interview skills. Whether you're a recent graduate or an experienced professional, Practice with AI is the perfect tool to help you succeed in your job search.
        </p>
        <Button asChild className="btn-primary">
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>

      <Image 
        src="/robot.png"
        alt="robo-dude"
        height={400}
        width={400}
        className="hidden lg:block max-sm:hidden"
      />

    </section>
    
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>

      <div className="interviews-section">
        {/* <p>You havn&apos;t taken any interviews yet</p> */}
        {dummyInterviews.map((interview) => (
          <InterviewCard { ...interview }  key={interview.id} />
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>

      <div className="interviews-section">
        {/* <p>You havn&apos;t taken any interviews yet</p> */}
        {dummyInterviews.map((interview) => (
          <InterviewCard { ...interview }  key={interview.id} />
        ))}
      </div>

    </section>
    
    </>
  )
}

export default page