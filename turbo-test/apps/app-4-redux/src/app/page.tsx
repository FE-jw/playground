import Btn from '@/components/btn';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Btn />
      <br />
      <Link className="inline-flex p-[20px]" href="/intro">
        intro 이동
      </Link>
      <Link href="/introaaa">404 이동</Link>
    </>
  );
}
