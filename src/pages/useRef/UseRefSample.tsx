import React, { useEffect, useRef, useState } from 'react'

function UseRefSample() {
  const [inptValue,setInptValue] = useState<string>('');
  // componentin kaç kez render alındığını yakaladığımız değişken.
  const renderCount = useRef(0);
  const onInputChange = (event:any) => {
    setInptValue(event.target.value);
  }
  useEffect(() => {
    renderCount.current  = renderCount.current + 1;
  }, [inptValue])

  return (
    <>
     Input Value: {inptValue}
     <input onChange={onInputChange} value={inptValue} />
     <br></br>
     <button onClick={() => {setInptValue('')}}>Clear Input With State</button>
    </>
  )
}

export default UseRefSample