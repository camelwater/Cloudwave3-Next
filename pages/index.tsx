import Layout, { siteTitle } from '@components/layout'
import utilStyles from '@css/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Ryan Zhao</p>
        <p>
          This is a test website, take a look at my{' '}
          <a href="https://www.github.com/camelwater" target='_target' rel='noopener noreferrer'>GitHub profile</a>.
        </p> 
      </section>
      <section className={utilStyles.list}>
        <p>
          Why not check out{' '}
          <Link href='/posts/post-1'>
            <a>
              my first post on this website
            </a>
          </Link>?
        </p>
      </section>
    </Layout>
  )
}

export default Home