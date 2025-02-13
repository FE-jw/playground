import Link from 'next/link';

function Page() {
  return (
    <>
      intro page
      <br />
      <Link href="/">Home 이동</Link>
      <Link href="/introaaa">404 이동</Link>
    </>
  );
}

export default Page;
