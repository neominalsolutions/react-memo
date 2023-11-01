import React, { useEffect, useLayoutEffect, useState } from 'react'

function UseLayoutEffectSample() {

  const [name,setName] = useState<string>('ali')
  const [color,setColor] = useState<string>();

  // 4s de iki datayı çözümleyecek.
  const loadData = async () => {
    let response =  await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();

    let response2 = await fetch('https://jsonplaceholder.typicode.com/users');
    let data2 = await response.json();

    data[0].coupouns = [...data2];
    // user: {name:'ali',couponse:[]}

    console.log('data', data);
     setName('ahmet');
  }

  // bu arkadaş asenkron çalışır.
  // useEffect hook async kod bloklarını çalıştırıken asenkron fonsiyonlarda olduğu gibi async işaretlenmez kensidi async çalışır.
  useEffect(() => {

    loadData();

    console.log('useEffect');

    // apidan veri çekme kısmı
    // setTimeout(() => {
    //   setName('ahmet');
    // }, 300);

    // sadece api call yada dom property binding
    // document.body.style.backgroundColor = 'yellow';

    return () => {
      
    }
  }, []);

  // bu hook senkron çalışır
  useLayoutEffect(() => {
    setColor('blue');
    console.log('useLayoutEffect');
    // dom'un ilk yüklenişinde domda hazır olarak görünmesi gereken özellikleri burada aktarırız
    // document.body.style.backgroundColor = 'red';

    return () => {
      // domdan çıkaraken dom üzerinden temizlenencek nesneler
      // div bir element remove node yapabiliriz
      // body rengi değiştere biliriz
    };
  }, [])
  


  return (
    <div style={{backgroundColor:color}}>Name: {name}</div>
  )


}

export default UseLayoutEffectSample