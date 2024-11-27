import Image from 'next/image'
import Link from 'next/link'
import ContentSection from './components/ContentSection'

export default function Home() {
  return (
    <ContentSection className="space-y-8">
      <h1 className="text-4xl font-bold text-center animate-float">Welcome to The Music Club</h1>
      <Image 
        src="/placeholder.svg?height=400&width=800" 
        alt="The Music Club Banner" 
        width={800} 
        height={400} 
        className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      />
      <p className="text-lg text-center animate-pulse">
        Join us in celebrating the power of music at Manipal University Jaipur!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background/60 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-secondary/10">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Upcoming Events</h2>
          <ul className="list-disc list-inside">
            <li className="animate-float" style={{animationDelay: '0.5s'}}>Annual Music Festival - June 15th</li>
            <li className="animate-float" style={{animationDelay: '1s'}}>Open Mic Night - Every Friday</li>
            <li className="animate-float" style={{animationDelay: '1.5s'}}>Workshop: Introduction to Guitar - July 1st</li>
          </ul>
          <Link href="/events" className="btn-primary inline-block mt-4 animate-pulse">
            View All Events
          </Link>
        </div>
        <div className="bg-background/60 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-secondary/10">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Latest News</h2>
          <p className="animate-float">Our club members won first place in the Inter-University Music Competition! Congratulations to the team!</p>
          <Link href="/news" className="btn-primary inline-block mt-4 animate-pulse">
            Read More News
          </Link>
        </div>
      </div>
    </ContentSection>
  )
}

