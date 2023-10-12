import Image from 'next/image'
import styles from './page.module.css'
import { Roboto } from 'next/font/google' 
const roboto=Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Font optimization in NextJS</h1>
     {/* <h1 style={{fontFamily:"Roboto",fontWeight:100}}>Font with link tag in Next</h1> */}
    
      <h1 className={roboto.className}>Font with next js Font feature</h1>

    </main>
  )
}
