import Link from 'next/link';
import Image from '../components/Imags'

const About = () => (
  <div style={{fontSize: '20px', color: 'blue'}}>
    <h1>About</h1>
    <Link href='/'>
      <button>Main</button>
    </Link>
    <Image />
    <p>I am a magician</p>
  </div>
)

export default About;