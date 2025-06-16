import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/cars'>
        <h1 className="text-center text-white animate-pulse mt-40 text-500">Нажми, чтобы перейти в галерею</h1>
      </Link>
      <div className="carusielle">
          <div className="group">
              <div>К</div>
              <div>А</div>
              <div>Т</div>
              <div>А</div>
              <div>Л</div>
              <div>О</div>
              <div>Г</div>
              <div></div>
          </div>
          <div className="group">
              <div>К</div>
              <div>А</div>
              <div>Т</div>
              <div>А</div>
              <div>Л</div>
              <div>О</div>
              <div>Г</div>
              <div></div>
          </div>
      </div>
    </>
  );
}
