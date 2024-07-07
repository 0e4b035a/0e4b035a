import { getPostData, getSortedPostsData } from '@/lib/posts'
import Image from 'next/image'

export async function generateStaticParams() {
	const posts = getSortedPostsData()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export default async function Post({ params }: { params: { slug: string } }) {
	const postData = await getPostData(params.slug)

	return (
		<article className="prose lg:prose-xl dark:prose-invert mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
			<div className="text-gray-500 dark:text-gray-400 mb-6">{postData.date}</div>
			{postData.imageSrc && (
				<div className="mb-8 max-w-2xl mx-auto">
					<Image
						src={postData.imageSrc}
						alt={postData.imageAlt}
						width={200}
						height={100}
						layout="responsive"
						className="rounded-lg"
					/>
				</div>
			)}
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	)
}
