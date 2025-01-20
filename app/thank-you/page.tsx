import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FFE566] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl mb-8">We've received your message and will get back to you soon.</p>
      <Link href="/">
        <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

