import React, { Component, memo } from 'react'

type HeaderProps = {
    title?:string; // optional
    name?:string;
}
// ChildComponent
// title değişiminde virtual dom üzerinde render alması gerekiyor.
function Header(props:HeaderProps) {
    console.log('Header Render');
    // object deconstruction
    const {title} = props;

  return (
    <>{title}</>
  )
}

// memo ile sarmalanmış component sadece componentin içerisinde props değerinin değişiminde tekrar render olur.
// parent component üzerinden bir state değişiminde tekrar render almaz. biz bu olaya memoisation diyoruz.

export default memo(Header);

// legalcy tanım şekli 2
function Header2({title,name}:HeaderProps) {

}




