import ResumeSocial from '@/components/ResumeSocial'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, description, email, twitter, linkedin, github } =
    frontMatter

  return (
    <>
      <PageSEO title={`${name} 이력서`} description={`${name} 이력서`} />
      <div className=" divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-10 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            이언상 이력서
          </h1>
          <h2
            className={
              'text-md font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14'
            }
          >
            {occupation}
          </h2>
        </div>
        <div className={'flex flex-col gap-4 md:flex-row md:gap-10'}>
          <div className={'flex-1'}>
            <div className={'whitespace-pre-line border-l-4 py-1 pl-4'}>{description}</div>
          </div>
          <div className="w-full space-y-3 md:w-[300px]">
            <ResumeSocial kind="Mail" href={email} />
            <ResumeSocial kind="Github" href={github} />
            <ResumeSocial kind="Linkedin" href={linkedin} />
            <ResumeSocial kind="twitter" href={twitter} />
          </div>
        </div>

        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark ">{children}</div>
      </div>
    </>
  )
}
