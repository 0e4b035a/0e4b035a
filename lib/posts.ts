import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostData {
  slug: string
  title: string
  date: string
  contentHtml: string
  imageSrc: string | null
  imageAlt: string
}

export function getSortedPostsData(): Omit<PostData, 'contentHtml' | 'imageSrc' | 'imageAlt'>[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      ...(matterResult.data as { title: string; date: string })
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  let contentHtml = processedContent.toString()

  const imageMatch = contentHtml.match(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"/)
  const imageSrc = imageMatch ? imageMatch[1] : null
  const imageAlt = imageMatch ? imageMatch[2] : ''

  contentHtml = contentHtml.replace(/<img[^>]+>/, '')

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    imageSrc,
    imageAlt,
  }
}
