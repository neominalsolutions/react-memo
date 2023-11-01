import React from 'react'

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

export default Header

// legalcy tanım şekli 2
function Header2({title,name}:HeaderProps) {

}