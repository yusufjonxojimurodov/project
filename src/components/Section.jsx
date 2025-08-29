import React from 'react'
import img from "img.svg"

const Section = () => {
  return (
    <div className='container'>

        <div>
            <h1>Управление запасами розничного магазина</h1>
            <p>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
            <button className='btn w-[300px] h-[42px]'>Заказать демонстрацию</button>
        </div>
        <div>
            <img src={img} alt="" />
        </div>

    </div>
  )
}

export default Section