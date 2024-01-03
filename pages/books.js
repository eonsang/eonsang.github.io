import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import BookCard from '@/components/BookCard'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const books = await getAllFilesFrontMatter('books')
  return { props: { books } }
}

export default function Books({ books }) {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Books
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {books.map((d) => {
              return (
                <BookCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={`/books/${d.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
