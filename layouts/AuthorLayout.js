import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className=" divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="flex flex-col  py-4 ">
          <h3 className="pt-0 pb-2 text-2xl font-bold leading-8 tracking-tight">
            {name}{' '}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {occupation}
            </span>
          </h3>
          <div className="flex space-x-3 pt-4">
            {/* <SocialIcon kind="mail" href={`mailto:${email}`} /> */}
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark ">{children}</div>
      </div>
    </>
  )
}
