import React from 'react'
import Frame from "../../public/Frame 39.svg"

const HeaderComponent = () => {
  return (
    <>
    <header>
        <div className="container flex justify-between items-center !p-4">
            <img src={Frame} alt="img" />

            <ul className='flex justify-center items-center !gap-6'>
                <li><a className='text-[14px] transition duration-300 hover:text-[#43A548]' href="">Как это работает</a></li>
                <li><a className='text-[14px] transition duration-300 hover:text-[#43A548]' href="">Инструкции</a></li>
                <li><a className='text-[14px] transition duration-300 hover:text-[#43A548]' href="">Продукты</a></li>
                <li><a className='text-[14px] transition duration-300 hover:text-[#43A548]' href="">База знаний </a></li>
                <li><a className='text-[14px] transition duration-300 hover:text-[#43A548]' href="">О нас</a></li>
                <li><button className='btn btn-primary !rounded-xl'>Вход</button></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default HeaderComponent