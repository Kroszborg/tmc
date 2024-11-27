import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background/70 rounded-lg backdrop-blur-sm">
      <h1 className="text-4xl font-bold mb-4 text-red-500 animate-float">404 - Page Not Found</h1>
      <p className="text-xl mb-8 animate-pulse">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary animate-bounce">
        Go back to homepage
      </Link>
    </div>
  )
}

