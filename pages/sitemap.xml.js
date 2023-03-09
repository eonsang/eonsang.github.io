const array = [
  '/blog/promise',
  '/blog/fileupload-with-multer',
  '/blog/custom-class-validator',
  '/blog/fileupload-with-presignedurl',
]

function sitemapScreen() {
  return <div></div>
}

const domain = 'https://lee-eonsang.com'
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml')
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
   <url>
		 <loc>${domain}</loc>
	 </url>
     ${array
       .map((path) => {
         return `
       <url>
           <loc>${domain + path}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `)
  res.end()

  return {
    props: {},
  }
}

export default sitemapScreen
