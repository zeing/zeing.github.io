import type { Metadata } from 'next'
import Hero from '@/components/hero'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function IndexPage() {
  return <Hero showNavbar />
}
