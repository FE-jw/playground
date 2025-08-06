import { UIHeader } from '@repo/ui';
import { math } from '@repo/utils';

export default function Home() {
  console.log(math.add(1, 2));

  return (
    <div>
      <UIHeader>app 1 header</UIHeader>
      next 1
    </div>
  );
}
