import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'
import { Link, Outlet } from 'react-router'
import { useTranslation } from 'react-i18next';
import logo from '../assets/Лого (1).png'
import menu from '../assets/меню.png'
import tel from '../assets/Phone (1).png'
import tg from '../assets/Telegram (1).png'
import ws from '../assets/WhatsApp (1).png'
import wb from '../assets/вайбер.png'
import tjk from '../assets/Без названия.png'
import ru from '../assets/Без названия (1).png'
import en from '../assets/Без названия (2).png'

const Layout = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <header>
                <nav className='flex items-center justify-between p-5 border-b-2 border-[#E7D8C7] pb-7 md:hidden'>
                    <img src={menu} alt="" />
                    <img src={logo} alt="" />
                    <img className='border-2 p-2 border-[#CB8734]' src={tel} alt="" />
                </nav>
                <nav className='hidden md:flex items-center justify-between max-w-[1300px] m-auto py-2'>
                    <div className='flex gap-3'>
                        <img src={logo} alt="" />
                        <p className='w-[280px] font-bold'>TokarCompany - производственно -строительная компания</p>
                    </div>
                    <div>
                        <p>Связаться напрямую:</p>
                        <div className='flex gap-3'>
                            <img src={tg} alt="" />
                            <img src={ws} alt="" />
                            <img src={wb} alt="" />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <p>+3 80 (67) 175 56 30</p>
                            <p>с 09:00 до 18:00 (пн-вс)</p>
                        </div>
                        <button className='text-white bg-[#E69533] py-3 px-7 rounded-md'>Заказать звонок</button>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img className='w-5 h-4' src={tjk} alt="" />
                        <img className='w-5 h-4' src={ru} alt="" />
                        <img className='w-5 h-4' src={en} alt="" />
                        <ModeToggle />
                    </div>
                </nav>
                <nav className='hidden md:flex items-center justify-between max-w-[1300px] m-auto py-3'>
                    <div>
                       <Link to={'/'}><button className='bg-[#3D1E19] py-6 px-12 font-bold rounded-[10px_0px_0px_10px] text-white'>Жилое</button></Link>
                       <Link to={'/catalog'}><button className='bg-[#3D1E19] py-6 px-12 font-bold text-white'>Коммерческое</button></Link>
                       <Link to={'/about'}><button className='bg-[#3D1E19] py-6 px-12 font-bold rounded-[0px_10px_10px_0px] text-white'>Садовое</button></Link>
                    </div>
                    <p className='font-bold'>О компании</p>
                    <p className='font-bold'>Наши работы</p>
                    <Link to={'/contact'}><p className='font-bold'>Контакты</p></Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='pt-20 p-5'>
                <div className='hidden md:flex items-center justify-between max-w-[1300px] m-auto py-3'>
                    <div>
                        <button className='bg-[#3D1E19] py-6 px-12 font-bold rounded-[10px_0px_0px_10px] text-white'>Жилое</button>
                        <button className='bg-[#3D1E19] py-6 px-12 font-bold text-white'>Коммерческое</button>
                        <button className='bg-[#3D1E19] py-6 px-12 font-bold rounded-[0px_10px_10px_0px] text-white'>Садовое</button>
                    </div>
                    <p className='font-bold'>О компании</p>
                    <p className='font-bold'>Наши работы</p>
                    <button className='py-3 px-7 text-white bg-[#DD9033] rounded-md'>Заказать звонок</button>
                </div>
                <div className='flex flex-col gap-3 items-center md:flex-row md:justify-between max-w-[1300px] m-auto'>
                    <div className='md:w-[230px] flex flex-col gap-2 items-center md:items-start'>
                        <Link to={'/'}><p>Дома	из	профилированого	бруса</p></Link>
                        <p className='hidden md:flex'>Дома	из	оцилиндрованого	бруса</p>
                        <p className='hidden md:flex'>Каркасные	дома</p>
                        <p className='hidden md:flex'>Дома	из	блока</p>
                    </div>
                    <div className=' flex flex-col gap-2 items-center md:items-start'>
                        <Link to={'/catalog'}><p>Базы	отдыха</p></Link>
                        <p className='hidden md:flex'>Гостинницы</p>
                        <p className='hidden md:flex'>Рестораны</p>
                        <p className='hidden md:flex'>Кафе</p>
                        <p className='hidden md:flex'>Магазины</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center md:items-start'>
                        <Link to={'/about'}><p>Деревянные	бани</p></Link>
                        <p className='hidden md:flex'>Беседки</p>
                        <Link to={'/contact'}><p>Альтанки</p></Link>
                        <p className='hidden md:flex'>Детские	игровые	площадки</p>
                        <p>Гаражи</p>
                        <p className='hidden md:flex'>Деревянные	детские	домики</p>
                        <p>Мангальные	зоны и	барбекю</p>
                        <p className='hidden md:flex'>Кухни</p>
                    </div>
                    <div className='flex md:hidden'>
                        <ModeToggle />
                    </div>
                    <div>
                        <div className='flex flex-col items-center md:flex-row md:items-center gap-3'>
                            <img src={logo} alt="" />
                            <p className='md:w-[250px] text-center'>TokarCompany - производственно-строительная компания</p>
                        </div>
                        <div className=' flex flex-col gap-2 items-center'>
                            <p>Связаться напрямую:</p>
                            <div className='flex gap-3'>
                                <img src={tg} alt="" />
                                <img src={ws} alt="" />
                                <img src={wb} alt="" />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2 items-center md:items-end text-end md:w-[270px]'>
                            <p className='text-2xl font-bold'>+3 80 (67) 175 56 30</p>
                            <p>с 09:00 до 18:00 (пн-вс)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#6B6966] text-center'>© 2020. Все права защищены. TokarCompany - Производственно-строительная компания. Информация, представленная на сайте, не является публичной офертой.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout