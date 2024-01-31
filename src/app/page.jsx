import Image from "next/image";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div>
      <div></div>
      <div>
        <Image src={Hero} alt="Hero image" />
      </div>
    </div>
  );
}
