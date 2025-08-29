import React from 'react'
import img from "../assets/img.svg"

const Section = () => {
  return (
    <div className='container flex justify-between items-center !mt-5'>
        <div className='flex justify-center items-center flex-col gap-4'>
            <h1>Управление запасами розничного магазина</h1>
            <p>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
            <button className='btn btn-primary w-[300px] h-[42px]'>Заказать демонстрацию</button>
        </div>
        <div>
            <img src={img} alt="" />
        </div>

    </div>
  )
}

export default Section