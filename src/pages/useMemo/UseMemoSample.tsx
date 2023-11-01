import React, { useMemo, useState } from 'react'

function UseMemoSample() {

const [number,setNumber] = useState<number>(1); // faktoriyel hesaplamak için kullanacağız
const [random, setRandom] = useState<number>(1); // random bir değer üreten state 0-100
// bu tarz durumda fonksiyonun değer döndürdüğü state dışındaki expensive maliyet ile bir alakası olmayan state değişimlerinde memoisation kavramı kullanmadığımız takdirde hesaplamalar tekrar sıfırdan yapılıp, component render maliyeti çıkacaktır.
// Not: Bu sebeple useMemo gibi bir yaklaşımın kullanıldığı componente de en az 2 adet state bulundurmalıyız.
const factorielFunction = (num:number) => { // expensiveFunction
  console.log('calculating....');
  let result = 1;

  for (let index = 2; index <= num; index++) {
    result *= index;
    
  }
  return result;
 } 

 // useMemo kullanılmadan önceki durum
//  const factoriel:number = factorielFunction(number);
// değişken değerlerimizi memoisation yapmak için useMemo hook'unu kullanıyoruz

// sadece number state değişimi olursa memoisation durumunu boz aksi takdirde tekrar bir hesaplama yapma.
const factoriel:number = useMemo(() => factorielFunction(number),[number]);

 const onInputChange= (event:any) => {
   if(!isNaN(event.target.value)){
    setNumber(Number(event.target.value));
   }
 }

  return (
    <>
      <input type='number' onChange={onInputChange} />
      <br></br>
      <span>
        Faktoriyel Sonuç : {factoriel}
      </span>
      <br></br>
     
      <button onClick={() => {setRandom(Math.round(Math.random() * 100))}}>Generate Random Number</button>
      <br></br>
       <span>
        Random Değer :{random}
      </span>
    </>
  )
}

export default UseMemoSample