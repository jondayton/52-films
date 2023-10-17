'use client'
import { useState } from 'react';

export default function App(): JSX.Element {
  const [text, setText] = useState<string>("");


  return (
    <>
      <input type="text" placeholder="Enter Text" onChange={({ target }) => (setText(target.value))} />
      <p>{text}</p>
    </>
  );
}