import React, { useState } from 'react'
import Header from './Header'

// Parent
function ReactMemoSample() {
  const [title,setTitle] = useState<string>('');
  
  const onSetTitle = () => {
    const titleValue = window.prompt('title değerini giriniz') as string;
    setTitle(titleValue);
  }

  return (
    <div>
      <Header title={title} />
      <button onClick={onSetTitle}>Set Title</button>
    </div>
  )
}

export default ReactMemoSample