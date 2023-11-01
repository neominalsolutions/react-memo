import React, { memo } from 'react'


type NameListProps = {
  names?:string[], // doma basılacak değer property
  onDelete(index:number):void // action buda ilgili item silmek için component içinde item bazlı fırlattığımız değer
}

function NameList({names, onDelete}:NameListProps) {

  console.log('NameList Rendering...');

  return (
    <>
      <div>
      {names?.map((name:string,index:number) => {
        return <div key={index}>{name}
        {' '}
        <button onClick={() => onDelete(index)}>Sil</button>
        </div> 
      })}
      </div>
      
    </>
  )
}

export default memo(NameList);