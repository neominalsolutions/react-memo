import React, { useState } from 'react'
import Header from './Header'

// Parent
function ReactMemoSample() {
  const [title,setTitle] = useState<string>('');
  // header ile hiç bir alakası olmayan state
  const [count,setCount] = useState<number>(0);
  // count state değişiminden header tekrar render alıcak mı?
  const onSetTitle = () => {
    const titleValue = window.prompt('title değerini giriniz') as string;
    setTitle(titleValue);
  }

  return (
    <div>
      Sayaç : {count}
      <br></br>
      <Header title={title} />
      <br></br>
      <button onClick={onSetTitle}>Set Title</button>
      <button onClick={() => {setCount(count+1)}}>
        Count (+)
      </button>
    </div>
  )
}

export default ReactMemoSample