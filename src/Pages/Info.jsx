import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import img from '../assets/Rectangle 321.png'
import img1 from '../assets/иконка (12).png'
import img2 from '../assets/фото (6).png'
import img3 from '../assets/фото (7).png'
import img4 from '../assets/фото (8).png'
import img5 from '../assets/фото (9).png'
import img6 from '../assets/фото (10).png'
import img7 from '../assets/фото (11).png'
import img8 from '../assets/фото (12).png'
import img9 from '../assets/фото (13).png'
import img10 from '../assets/фото (14).png'
import img11 from '../assets/фото (15).png'
import img12 from '../assets/иконка13.png'

const Info = () => {
    let { id } = useParams()
    let api = 'https://to-dos-api.softclub.tj/api/to-dos'
    let apiImg = 'https://to-dos-api.softclub.tj/images'
    let [user, setUser] = useState([])
    async function getById() {
        try {
            const { data } = await axios.get(`${api}/${id}`)
            setUser(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getById()
    }, [])
    return (
        <div>
            <section className='max-w-[1300px] m-auto p-6'>
                <p className='text-gray-400 my-5'>Главная страница / Жилое / Вариант ST-56 «Barcelona»</p>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className='text-3xl font-black'>Вариант ST-56 «Barcelona»</p>
                    <div className='flex items-center font-bold'>
                        <p className='py-2 px-3 border-2 border-[#CB8734] text-[#CB8734] rounded-[50%]'>{'<'}</p>
                        <p className='text-[#CB8734]'>Вернуться назад</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col md:flex-row items-center md:justify-center gap-10'>
                        {user?.images?.map((img) => {
                            return (
                                <div className='md:w-[900px]'>
                                    <img className='w-full h-[500px] rounded-[0px_30px_0px_30px]' src={`${apiImg}/${img.imageName}`} alt="" />
                                </div>
                            )
                        })}
                        <div className='flex flex-row md:flex-col'>
                            <img className='w-[100px] md:w-[200px]' src={img} alt="" />
                            <img className='w-[100px] md:w-[200px]' src={img} alt="" />
                            <img className='w-[100px] md:w-[200px]' src={img} alt="" />
                            <img className='w-[100px] md:w-[200px]' src={img} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='md:w-[300px] p-4 shadow-2xl'>
                            <p className='text-4xl'>от 1 000 000 грн</p>
                            <p>Стоимость строения зависит от комплектации</p>
                            <button className='py-3 px-10 bg-[#E99732] rounded-md text-white'>Получить точный расчет</button>
                        </div>
                        <div>
                            <p className='text-4xl'>Закажите консультацию, если сомневаетесь</p>
                            <div>
                                <input type="text" placeholder='+38 XXX XXX XX XX' className='md:w-[500px] p-2 border-2' />
                                <button className='py-3 px-10 bg-[#E99732] rounded-md text-white'>Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1300px] m-auto shadow-md p-5'>
                <p className='text-4xl font-black'>Характеристика строения:</p>
                <div className='flex flex-col md:flex-row items-center gap-5 p-5'>
                    <div>
                        <div className='flex gap-3 w-[350px] md:w-[600px] items-center border-t-2'>
                            <img src={img1} alt="" />
                            <p>20м²</p>
                        </div>
                        <div className='flex gap-3 w-[350px] md:w-[600px] items-center border-t-2'>
                            <img src={img1} alt="" />
                            <p>20м²</p>
                        </div>
                        <div className='flex gap-3 w-[350px] md:w-[600px] items-center border-t-2 border-b-2'>
                            <img src={img1} alt="" />
                            <p>20м²</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <img src={img} alt="" />
                            <div>
                                <p>Barcelona</p>
                                <p>Технологии:</p>
                                <p className='font-bold'>Дом из газоблока и кирпича</p>
                                <p>Сроки строительства:</p>
                                <p className='font-bold'>30 дней</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Фундамент</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Стиль</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Окна и входные двери</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Внутренняя отделка</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Кровля</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Фасад</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Электросеть</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#CB8734] text-2xl font-black'>{'>'}</p>
                                    <p>Процесс работы</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] m-auto py-10 p-5'>
                <p className='text-3xl font-bold mb-5'>Фундамент</p>
                <img src={img2} alt="" />
            </section>
            <section className='max-w-[1200px] m-auto py-10 p-5'>
                <p className='text-3xl font-bold mb-5'>Стиль</p>
                <img src={img3} alt="" />
            </section>
            <section className='max-w-[1200px] m-auto py-10 p-5'>
                <p className='text-3xl font-bold mb-5'>Окна и входные двери</p>
                <div className='flex flex-col md:flex-row gap-5 md:justify-between'>
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </section>
            <section className='max-w-[1200px] m-auto py-10 flex flex-col md:flex-row md:justify-between p-5'>
                <div className='flex flex-col items-start'>
                    <p className='text-3xl font-bold mb-5'>Внутренняя отделка</p>
                    <img src={img6} alt="" />
                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-3xl font-bold mb-5'>Фасад</p>
                    <img src={img9} alt="" />
                </div>
            </section>
            <section className='max-w-[1200px] m-auto py-10 p-5'>
                <p className='text-3xl font-bold mb-5'>Кровля</p>
                <img src={img10} alt="" />
            </section>
            <section className='max-w-[1200px] m-auto py-10 p-5'>
                <p className='text-3xl font-bold mb-5'>Электросеть</p>
                <img src={img8} alt="" />
            </section>
            <section className='bg-[#FFFBF6] text-black max-w-[1200px] m-auto flex flex-col md:flex-row md:justify-between items-center p-5'>
                <div className='p-5 flex flex-col gap-3'>
                    <p className='text-3xl md:w-[350px]'>Закажите консультацию, если сомневаетесь</p>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <input type="text" placeholder='+38 XXX XXX XX XX' className='md:w-[500px] p-2 border-2' />
                        <button className='py-3 px-10 bg-[#E99732] rounded-md text-white'>Заказать</button>
                    </div>
                    <p>Отправляя данные, Вы соглашаетесь на обработку персональных данных</p>
                </div>
                <img src={img11} alt="" />
            </section>
            <section className='max-w-[1200px] m-auto py-20 p-5'>
                <p className='text-4xl font-bold'>Процесс работы</p>
                <div className='flex flex-col items-center md:flex-row gap-20'>
                    <div>
                        <p className='bg-[#CB8734] w-[300px] py-3 px-5 text-white rounded-[0px_100px_100px_0px]'>Процесс 1</p>
                        <p className='font-bold'>Общение с экспертами</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-20 mt-10'>
                    <div>
                        <p className='bg-[#CB8734] w-[300px] py-3 px-5 text-white rounded-[0px_100px_100px_0px]'>Процесс 1</p>
                        <p className='font-bold'>Общение с экспертами</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-20 mt-10'>
                    <div>
                        <p className='bg-[#CB8734] w-[300px] py-3 px-5 text-white rounded-[0px_100px_100px_0px]'>Процесс 1</p>
                        <p className='font-bold'>Общение с экспертами</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                        <div className='p-5 shadow-2xl rounded-[0px_20px_0px_0px] w-[200px]'>
                            <img src={img12} alt="" />
                            <p>Ваше знакомство
                                с представителем  компании.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info