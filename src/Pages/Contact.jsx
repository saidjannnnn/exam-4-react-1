import React from 'react'
import img10 from '../assets/фото (4).png'
import img1 from '../assets/иконка (13).png'
import img2 from '../assets/Карта.png'
import img3 from '../assets/Иконка (14).png'

const Contact = () => {
    return (
        <div>
            <section className='max-w-[1200px] m-auto p-5'>
                <p>Главная страница / Контакты</p>
                <p className='text-4xl font-bold'>Контакты, как с нами связаться</p>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <p className='text-2xl'>Связаться с компанией TokarMebel вы сможете с помощью одного из этих способов:</p>
                        <div className='flex justify-between items-center md:w-[430px] shadow-md p-5 rounded-2xl'>
                            <div>
                                <p>Телефоны:</p>
                                <p>Отдел продаж:</p>
                                <p>Отдел логистики:</p>
                                <p>Позвонить компании</p>
                            </div>
                            <div className='font-bold'>
                                <p>+38 (098) 188 55 66</p>
                                <p>+38 (068) 704 37 77</p>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                        <div className='flex justify-between items-center md:w-[430px] shadow-md p-5 rounded-2xl'>
                            <div>
                                <p>Телефоны:</p>
                                <p>Отдел продаж:</p>
                                <p>Отдел логистики:</p>
                                <p>Позвонить компании</p>
                            </div>
                            <div className='font-bold'>
                                <p>+38 (098) 188 55 66</p>
                                <p>+38 (068) 704 37 77</p>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                        <div className='flex justify-between items-center md:w-[430px] shadow-md p-5 rounded-2xl'>
                            <div>
                                <p>Телефоны:</p>
                                <p>Отдел продаж:</p>
                                <p>Отдел логистики:</p>
                                <p>Позвонить компании</p>
                            </div>
                            <div className='font-bold'>
                                <p>+38 (098) 188 55 66</p>
                                <p>+38 (068) 704 37 77</p>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                        <div className='flex justify-between items-center md:w-[430px] shadow-md p-5 rounded-2xl'>
                            <div>
                                <p>Телефоны:</p>
                                <p>Отдел продаж:</p>
                                <p>Отдел логистики:</p>
                                <p>Позвонить компании</p>
                            </div>
                            <div className='font-bold'>
                                <p>+38 (098) 188 55 66</p>
                                <p>+38 (068) 704 37 77</p>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                        <p>Компания TokarMabel находится по адресу:</p>
                        <p>Украина, Тячевский район. г. Тячев, ТЦ "Стиль"</p>
                        <p className='text-[#CB8734] border-b-2 w-[300px] border-[#CB8734]'>Проложить маршрут</p>
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-3 items-center'>
                        <div className='p-10 shadow-2xl w-[450px] flex flex-col gap-4'>
                            <p className='text-3xl'>Закажите консультацию, если сомневаетесь</p>
                            <input className='border-2 p-2 rounded-3xl w-full' type="text" placeholder='Введите имя' />
                            <input className='border-2 p-2 rounded-3xl w-full' type="text" placeholder='+38 XXX XXX XX XX' />
                            <button className='py-3 px-15 bg-[#E49433] text-white w-full rounded-md'>Получить точный расчет</button>
                            <p>Отправляя данные, Вы соглашаетесь на обработку персональных данных</p>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] m-auto p-5 md:py-30'>
                <p className='text-3xl font-black'>Реквизиты компании:</p>
                <div className='flex flex-col items-center md:flex-row md:justify-between mt-5'>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row md:justify-between mt-5'>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row md:gap-57 mt-5'>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                    <div className='w-[250px] flex gap-5 items-center p-5 shadow-md rounded-md'>
                        <img src={img3} alt="" />
                        <div>
                            <p>Наименование компании:</p>
                            <p className='font-bold'>Tokar Mebel</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] m-auto p-5'>
                <p className='text-4xl font-bold'>Последние статьи</p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-[350px] p-5 shadow-2xl rounded-[0px_40px_0px_0px]'>
                        <img src={img10} alt="" />
                        <div className='p-3'>
                            <p className='font-bold'>Готовый загородный дом или самостоятельное строительство?</p>
                            <p className='text-[12px]'>Купить или построить дом с нуля – неизбежный вопрос, когда возникает желание приобрести частную недвижимость за городом. </p>
                        </div>
                    </div>
                    <div className='w-[350px] p-5 shadow-2xl rounded-[0px_40px_0px_0px]'>
                        <img src={img10} alt="" />
                        <div className='p-3'>
                            <p className='font-bold'>Готовый загородный дом или самостоятельное строительство?</p>
                            <p className='text-[12px]'>Купить или построить дом с нуля – неизбежный вопрос, когда возникает желание приобрести частную недвижимость за городом. </p>
                        </div>
                    </div>
                    <div className='w-[350px] p-5 shadow-2xl rounded-[0px_40px_0px_0px]'>
                        <img src={img10} alt="" />
                        <div className='p-3'>
                            <p className='font-bold'>Готовый загородный дом или самостоятельное строительство?</p>
                            <p className='text-[12px]'>Купить или построить дом с нуля – неизбежный вопрос, когда возникает желание приобрести частную недвижимость за городом. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact