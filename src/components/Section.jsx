import React from 'react'
import img from "../assets/img.svg"

const Section = () => {
  return (
    <div className='container flex justify-between items-center !mt-10'>
        <div className='flex justify-center items-start flex-col gap-4'>
            <h1 className='!font-semibold text-[60px]'>Управление запасами розничного магазина</h1>
            <p className='w-[648px]'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
            <button className='btn btn-primary w-[300px] h-[42px]'>Заказать демонстрацию</button>
        </div>
        <div>
            <img src={img} alt="" />
        </div>

    </div>
  )
}

export default Section