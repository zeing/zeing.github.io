import type { Metadata } from 'next'
import Hero from '@/components/hero'

export const metadata: Metadata = {
  title: 'Social',
  description: "Zeing's social media — follow on Instagram, GitHub, LinkedIn, and Discord.",
  alternates: { canonical: '/social' },
  openGraph: {
    url: 'https://zeing.me/social',
    title: 'Social · Zeing',
    description: "Zeing's social media — follow on Instagram, GitHub, LinkedIn, and Discord.",
  },
}

export default function SocialPage() {
  return (
    <>
      <Hero showNavbar goTo="#detail" />
      <main className="flex flex-col items-center w-full justify-center" id="detail">
        <div className="flex space-y-10 md:space-y-0 md:space-x-10 h-full w-full flex-wrap max-w-(--breakpoint-xl) p-20">
          <iframe src="https://www.instagram.com/zeing/" className="w-full" />
        </div>
      </main>
    </>
  )
}
