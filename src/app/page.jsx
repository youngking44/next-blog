import Image from "next/image";
import Hero from "public/heroImage.png";

export default function Home() {
  return (
    <div>
      <Image src={Hero} alt="e" />
    </div>
  );
}
