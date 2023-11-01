import React, { useEffect, useState } from 'react'

function UseEffectSample() {
  // function componentlerde stateler birbirinden bağımsız bir şekilde tanımlanabilir.
  const [a,setA] = useState<number>(0);
  const [counter,setCounter] = useState<number>(0); // this.state
  // setCounter setState() denk gelir.
  // bu useEffect state değiminden acaba etkileniyor mu? useState hookdaki state değişirse virtual dom üzerinden component yeniden render olur
  useEffect(() => {
    console.log('useEffect'); // componentdidmount methoda denk gelir.
    // async kod blokları ile dom yüklenir veri çekme işlemleri için kullanıyoruz.
    // promise ve async await yapıları ile çalıştığımız hook
    return () => {
      // clean up function
      // clean up işlemleri
      // network istek sonladırma 
      // socket terminate etme
      // timing işlemlerini clear etme
      // class componentde componentwillunmount methoduna denk gelir.
      console.log('useEffect clean up')
    }
  },[]); // [] state dependecies bu dizi içerisinde tanımlanan statelerin değişiminde useEffect tekrardan tetiklenir. o yüzden useEffect kullanırken en az bir tane [] tanımı yapmayı unutmayalım.

  // useEffect sadece state değiminde tetiklenir. event state değiştirmiyorsa useEffect tetiklenmez.

  useEffect(() => {
    // her bir useEffect hook 1 kereye mahsus component doma ilk girdiğinde çalışır
    // eğer useEffect dependecy bağlarsak artık state değişiminde tetiklenir. counter state değişimind tetiklenecek bir yapı kurduk.

    console.log('counter-state-değişti');

    return () => {
      // clean up function yazılabilir
    }

  },[counter]); // sadece counter state değimini takibe aldık
  
  useEffect(() => { // class componentde componentdiupdate methoduna denk gelir.

  },[counter,a]) // counter state veya a state değişiminde otomatik olarak tetiklenir.

  return (
    <div>
      Sayac: {counter}
      <button onClick={() => {alert('message')}}>Show Message</button>
      <button onClick={() => {setCounter(counter + 1)}}>(+)</button>
    </div>
  )
}

export default UseEffectSample