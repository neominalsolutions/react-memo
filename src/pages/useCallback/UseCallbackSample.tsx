import React, { useCallback, useState } from 'react'
import NameList from './NameList'

// parent ve child component ile oluşan bir durum
function UseCallbackSample() {

  // JS de functions, array, object referance type
  // eğer componentde bir state değişimş olursa referance type değerler yeniden oluşuyor.
  // component içerisinde tanımlanan functionlarda gereksiz bir rendering süreci yaratıyor.

  const [names,setNames] = useState<string[]>(['ahmet','can','hakan']);
  const [count,setCount] = useState<number>(0);

  // useMemonun function için kullanılan hali, ikiside aynı görevi üstleniyor.
  const onItemDelete = useCallback((index:number) => {
    console.log('delete-index',index);
    names.splice(index,1); // indeksinciyi sil
    setNames([...names]);
  },[names])

  // Bir child component içerisinde props olarak action tanımlanıyor ve bu action değeri parent component üzerinden dinleniyorsa,
  // onItemDelete function NameList component içindeki OnDelete eventini dinliyor.

  return (
    <div style={{padding:'20px'}}>
      <NameList names={names} onDelete={onItemDelete} />

      <br></br>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default  UseCallbackSample