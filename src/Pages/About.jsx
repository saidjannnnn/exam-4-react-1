import React from 'react'
import img1 from '../assets/Слайдер (2).png'
import img2 from '../assets/Group 45.png'
import img6 from '../assets/фон (3).png'
import img7 from '../assets/Group (28).png'
import img10 from '../assets/фото (4).png'
import img11 from '../assets/фото (15).png'
import img12 from '../assets/фон (4).png'

const About = () => {
    return (
        <div>
            <section className='max-w-[1200px] m-auto p-5'>
                <p>Главная страница / О компании</p>
                <p className='text-4xl font-bold my-5'>О компании</p>
                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    <div className='md:w-[600px] p-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit tellus mauris a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.</p> <br />
                        <p>Porta non pulvinar neque laoreet suspendisse interdum consectetur. Congue quisque egestas diam in arcu cursus euismod. Eget gravida cum sociis natoque penatibus et magnis. Sit amet justo donec enim diam vulputate ut. Elementum integer enim neque volutpat ac tincidunt vitae. Adipiscing at in tellus integer feugiat. Cursus eget nunc scelerisque viverra. </p>
                    </div>
                    <img src={img1} alt="" />
                </div>
            </section>
            <section className='max-w-[1200px] m-auto p-5 md:p-0'>
                <p>О компании TokarMebel</p>
                <img src={img6} alt="" />
                <div className='md:w-150 p-5 bg-white text-black'>
                    <div className='bg-white text-black flex justify-center items-start mt-[-60px] gap-3'>
                        <img src={img7} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p>Точилов Александр Николаевич</p>
                            <p>Цитата о компании, пару слов от самого лица компании. Цитата о компании, пару слов от самого лица компании. </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center text-center md:text-start gap-3 md:flex-row md:justify-between'>
                    <div className='w-[270px]'>
                        <p className='text-3xl text-[#CB8734]'>21 год</p>
                        <p className='border-t-2 border-[#CB8734] pt-2'>Работаем на рынке Украины с 1998 года</p>
                    </div>
                    <div className='w-[270px]'>
                        <p className='text-3xl text-[#CB8734]'>300+</p>
                        <p className='border-t-2 border-[#CB8734] pt-2'>Позиций различных строений</p>
                    </div>
                    <div className='w-[270px]'>
                        <p className='text-3xl text-[#CB8734]'>до 7%</p>
                        <p className='border-t-2 border-[#CB8734] pt-2'>Влажность просушенного дерева, что соответствует нормативам ГОСТ</p>
                    </div>
                    <div className='w-[270px]'>
                        <p className='text-3xl text-[#CB8734]'>в 1,5 раза</p>
                        <p className='border-t-2 border-[#CB8734] pt-2'>Стоимость доставки ниже рыночной</p>
                    </div>
                </div>
                <button className='py-3 px-7 bg-[#EA9832] text-white block m-auto rounded-md my-4'>Подробнее о компании</button>
            </section>
            <section className='max-w-[1200px] m-auto p-10 shadow-md'>
                <p className='text-3xl font-bold text-center md:text-start mb-2'>Почему выбирают нас:</p>
                <div className='flex flex-col md:flex-row items-center md:justify-between gap-5 text-center md:text-start'>
                    <div className='flex flex-col gap-3 items-center md:items-start w-[200px]'>
                        <img src={img2} alt="" />
                        <div>
                            <p className='font-bold'>Эксклюзивный дизайн</p>
                            <p>Не имеющий аналогов в Украине</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center md:items-start w-[200px]'>
                        <img src={img2} alt="" />
                        <div>
                            <p className='font-bold'>Эксклюзивный дизайн</p>
                            <p>Не имеющий аналогов в Украине</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center md:items-start w-[200px]'>
                        <img src={img2} alt="" />
                        <div>
                            <p className='font-bold'>Эксклюзивный дизайн</p>
                            <p>Не имеющий аналогов в Украине</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center md:items-start w-[200px]'>
                        <img src={img2} alt="" />
                        <div>
                            <p className='font-bold'>Эксклюзивный дизайн</p>
                            <p>Не имеющий аналогов в Украине</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] m-auto flex flex-col md:flex-row md:justify-between items-center p-5'>
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
            <section className='max-w-[1200px] m-auto p-5'>
                <p className='text-4xl font-bold mb-5'>Фотографии производства</p>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <img src={img12} alt="" />
                    <img src={img12} alt="" />
                    <img src={img12} alt="" />
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

export default About