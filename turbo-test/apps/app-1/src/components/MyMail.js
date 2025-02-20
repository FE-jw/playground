import {useState} from 'react';
import style from './Mymail.module.css';

function MyMail() {
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const sendEmail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail, subject, text}),
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <h2>mail</h2>
      <ul>
        <li>
          <input
            type="text"
            placeholder="email"
            className={style.inp}
            onChange={e => setMail(e.target.value)}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="subject"
            className={style.inp}
            onChange={e => setSubject(e.target.value)}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="text"
            className={style.inp}
            onChange={e => setText(e.target.value)}
          />
        </li>
      </ul>
      <button type="button" onClick={sendEmail}>
        submit
      </button>
    </>
  );
}

export default MyMail;
