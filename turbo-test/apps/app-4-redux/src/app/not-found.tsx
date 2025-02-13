import Link from 'next/link';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
