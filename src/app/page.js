import Profile from "../../public/vercel.svg";
import Image from "next/image";
export default function Home() {
  console.log(Profile);
  return (
    <main>
      <h1>Image optimization in Next js</h1>
      {/* <img src={Profile} />
      <Image src={Profile} />
       <Image src={Profile.src} width={500} height={500} />  */}

      <Image src="https://as2.ftcdn.net/v2/jpg/05/21/18/03/1000_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg" 
      width={200} height={200}
      />
    </main>
  );
}
