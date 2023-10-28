import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href='./Pokemon'>Pokemon</Link>
      <br />
      <Link href='./NotesTailwind'>NotesTailwind</Link>
    </main>
  )
}
