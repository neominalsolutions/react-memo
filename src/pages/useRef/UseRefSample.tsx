import React, { useEffect, useRef, useState } from 'react'

function UseRefSample() {
  const [inptValue,setInptValue] = useState<string>('');
  // componentin kaç kez render alındığını yakaladığımız değişken.
  // useRef sayesinde function içerisinde render alındığında sıfırlanan bir değişken değerinin son halini memoisation yapmış olduk. Bu durumda renderCount sıfırlanmadı. her inptValue değişiminde bir önceki değeri koruduğu için doğru bir değer ile çalışmı olduk
  const renderCount = useRef<number>(0);
  // let renderCount = 0;
  console.log('renderCount');
  const onInputChange = (event:any) => {
    setInptValue(event.target.value);
  }

  const onBlurChange = (event:any) => {
     setInptValue(event.target.value);
  }
  // 1. kural Input ile çalışırken OnChange gereksiz render yapıyor.

  useEffect(() => {
    renderCount.current  = renderCount.current + 1;
    // renderCount  = renderCount + 1;
  }, [inptValue])

  return (
    <>
     Input Value: {inptValue} {' '}
     Render Count: {renderCount.current}
     {/* Render Count: {renderCount} */}
     <hr></hr>
     <input onChange={onInputChange} defaultValue={inptValue}  />
     <h6>On Blur</h6>
     <input onBlur={onBlurChange} defaultValue={inptValue}  />
     <br></br>
     <button onClick={() => {setInptValue('')}}>Clear Input With State</button>
    </>
  )
}

export default UseRefSample