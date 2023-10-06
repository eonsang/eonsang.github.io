import Mail from './social-icons/mail.svg'
import Github from './social-icons/github.svg'
import Facebook from './social-icons/facebook.svg'
import Youtube from './social-icons/youtube.svg'
import Linkedin from './social-icons/linkedin.svg'
import Twitter from './social-icons/twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  Mail: Mail,
  Github: Github,
  Facebook: Facebook,
  Youtube: Youtube,
  Linkedin: Linkedin,
  Twitter: Twitter,
}

const ResumeSocial = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="block text-sm text-gray-500 transition "
      target="_blank"
      rel="noopener noreferrer"
      href={kind === 'Mail' ? `mailto:` + href : href}
    >
      <div
        className={
          'flex items-center gap-4 bg-[rgba(0,0,0,.05)] p-3 dark:bg-[rgba(255,255,255,.1)]'
        }
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg className={`h-[28px] w-[28px] fill-current text-gray-700 dark:text-gray-200`} />
        <p className={`text-black dark:text-white`}>{kind === 'Mail' ? href : kind}</p>
      </div>
    </a>
  )
}

export default ResumeSocial
