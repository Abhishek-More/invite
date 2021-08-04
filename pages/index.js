import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Events from '../components/Events'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invite</title>
        <meta name="description" content="Simple RSVP Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar className="absolute inset-y-0 left-0"/>
        <Events className=""/>
        <div className="">
        </div>
      </main>
    </div>
      )
}
