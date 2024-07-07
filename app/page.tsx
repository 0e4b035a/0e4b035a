import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { ModeToggle } from "@/components/mode-toggle"
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6'

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold">0e4b035a</h1>
        <div className="flex space-x-4 items-center">
          <Link href="https://x.com/0e4b035a" aria-label="X" className="text-gray-500 dark:text-gray-400 hover:text-blue-500">
            <FaXTwitter size={24} />
          </Link>
          <Link href="https://github.com/0e4b035a" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-black">
            <FaGithub size={24} />
          </Link>
          <Link href="https://discord.gg/sQcr9zjm" aria-label="Discord" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500">
            <FaDiscord size={24} />
          </Link>
          <ModeToggle />
        </div>
      </header>
      <ul className="space-y-4">
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug} className="p-4">
            <Link href={`/posts/${slug}`} className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {title}
            </Link>
            <br />
            <span className="text-gray-500 dark:text-gray-400">{date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
