import Link from 'next/link';

const style = {
  display: 'inline-flex',
  margin: '10px',
  padding: '20px',
  fontSize: '14px',
  color: '#fff',
  backgroundColor: '#000'
};

function MyLink(props) {
  return (
    <Link
      href={props.href}
      className="inline-flex m-[5px] py-[10px] px-[20px] font-[14px] text-[#fff] bg-[#000]"
      onMouseEnter={props.evtMouseEnter}
      onMouseLeave={props.evtMouseLeave}
    >
      {props.children}
    </Link>
  );
}

export default MyLink;
