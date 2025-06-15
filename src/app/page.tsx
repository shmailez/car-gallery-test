import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/cars'>
      <h1 className="text-center animate-pulse mt-40 text-500">Нажми, чтобы перейти в галерею</h1></Link>
    </>
  );
}
