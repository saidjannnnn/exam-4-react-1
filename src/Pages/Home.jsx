import React from 'react'
import { useTranslation } from 'react-i18next';
import img1 from '../assets/Слайдер.png'
import img2 from '../assets/Group 45.png'
import img3 from '../assets/фото (1).png'
import img4 from '../assets/Создание-3D-макета 1.png'
import img5 from '../assets/Rectangle 208.png'
import img6 from '../assets/фон (3).png'
import img7 from '../assets/Group (28).png'
import img8 from '../assets/фото (2).png'
import img9 from '../assets/фото (3).png'
import img10 from '../assets/фото (4).png'
import img11 from '../assets/фото (5).png'
import '../App.css'

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className=' pb-50 '>
        <section className='max-w-[1300px] m-auto flex flex-col md:flex-row items-center justify-between p-5 md:p-0'>
          <div className='flex flex-col gap-5 items-start'>
            <p className='text-center md:hidden text-xl font-bold'>TokarCompany - производственно -строительная компания</p>
            <p className='md:w-[600px] text-3xl md:text-5xl font-bold text-center md:text-start'>Производим и устанавливаем строения разных видов
              в Украине</p>
            <p className='md:w-[550px] hidden md:flex'>Индивидуально под ваш запрос построим дом, ресторан, баню, беседку, мангал или любую другую постройку</p>
            <div className='hidden md:flex gap-10 md:items-center'>
              <button className='bg-[#E69533] py-4 px-7 rounded-[10px] text-white'>Перейти в каталог домов</button>
              <div className='flex gap-5 items-center'>
                <p className='border-2 border-[#E69533] text-[#E69533] py-1 px-2 rounded-full'>{'>'}</p>
                <p className='text-[#E69533]'>Каталог бань</p>
              </div>
            </div>
          </div>
          <img src={img1} alt="" />
          <p className='text-center font-bold md:hidden'>Индивидуально под ваш запрос построим дом, ресторан, баню, беседку, мангал или любую другую постройку</p>
          <button className='bg-[#E69533] py-4 px-7 rounded-[10px] text-white block m-auto my-3 md:hidden'>Перейти в каталог домов</button>
          <div className='flex justify-center gap-5 items-center md:hidden'>
            <p className='border-2 border-[#E69533] text-[#E69533] py-1 px-2 rounded-full'>{'>'}</p>
            <p className='text-[#E69533]'>Каталог бань</p>
          </div>
        </section>
      </div>
      <section className='max-w-[1300px] m-auto p-10 shadow-md md:mt-[-140px]'>
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
      <section className='sec1 max-w-[1300px] m-auto p-5 md:pt-15 md:px-35'>
        <p className='text-3xl mb-10 font-bold text-black'>Каталог проектов</p>
        <div className='flex flex-col text-black md:flex-row gap-5'>
          <div className='bg-[white] w-[350px] rounded-[0px_35px_0px_0px] p-5 shadow-2xl'>
            <img src={img3} alt="" />
            <div className='p-3'>
              <p className='text-2xl'>Жилое</p>
              <p>Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками</p>
              <div className='flex items-center gap-2'>
                <p className='text-[#CB8734] border-2 border-[#CB8734] rounded-full py-2 px-3'>{'>'}</p>
                <p className='text-[#CB8734]'>Ознакомиться с проектами</p>
              </div>
            </div>
          </div>
          <div className='bg-[white] w-[350px] rounded-[0px_35px_0px_0px] p-5 shadow-2xl'>
            <img src={img3} alt="" />
            <div className='p-3'>
              <p className='text-2xl'>Жилое</p>
              <p>Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками</p>
              <div className='flex items-center gap-2'>
                <p className='text-[#CB8734] border-2 border-[#CB8734] rounded-full py-2 px-3'>{'>'}</p>
                <p className='text-[#CB8734]'>Ознакомиться с проектами</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[white] text-black flex flex-col w-[350px] md:w-[650px] md:flex-row-reverse mt-5 rounded-[0px_35px_0px_0px] p-5 shadow-2xl'>
          <img className='md:w-[300px]' src={img3} alt="" />
          <div className='p-3'>
            <p className='text-2xl'>Жилое</p>
            <p>Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками</p>
            <div className='flex items-center gap-2'>
              <p className='text-[#CB8734] border-2 border-[#CB8734] rounded-full py-2 px-3'>{'>'}</p>
              <p className='text-[#CB8734]'>Ознакомиться с проектами</p>
            </div>
          </div>
        </div>
      </section>
      <div className='md:py-20 p-5 md:p-0'>
        <section className='max-w-[1300px] m-auto'>
          <p className='md:w-[300px] text-3xl font-bold mb-5'>Из чего состоят наши строения?</p>
          <div className='flex md:justify-between flex-col md:flex-row'>
            <div className='md:w-[47%] p-5 text-black bg-white'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Создание 3D-макета</p>
                <img className='w-50 mt-[-80px]' src={img4} alt="" />
              </div>
              <p>Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.</p>
            </div>
            <div className='md:w-[47%] p-5 text-black bg-white mt-15 md:mt-0'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Создание 3D-макета</p>
                <img className='w-50 mt-[-80px]' src={img4} alt="" />
              </div>
              <p>Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.</p>
            </div>
          </div>
          <div className='flex md:justify-between mt-15 flex-col md:flex-row'>
            <div className='md:w-[47%] p-5 text-black bg-white'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Создание 3D-макета</p>
                <img className='w-50 mt-[-80px]' src={img4} alt="" />
              </div>
              <p>Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.</p>
            </div>
            <div className='md:w-[47%] p-5 text-black bg-white mt-15 md:mt-0'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Создание 3D-макета</p>
                <img className='w-50 mt-[-80px]' src={img4} alt="" />
              </div>
              <p>Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.</p>
            </div>
          </div>
          <img className="my-5 block m-auto" src={img5} alt="" />
          <div className='flex flex-col items-center md:flex-row gap-10 mt-5'>
            <button className='py-4 px-7 rounded-md bg-[#D88E34] text-center text-white'>Перейти в каталог домов</button>
            <div className='flex gap-3'>
              <p className='py-2 px-3 border-2 border-[#CB8734] text-[#CB8734] rounded-full'>{'>'}</p>
              <p className='text-[#CB8734]'>Каталог бань</p>
            </div>
          </div>
        </section>
      </div>
      <section className='max-w-[1300px] m-auto p-5 md:p-0'>
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
      <section className='max-w-[1300px] m-auto p-5 text-center'>
        <p className='text-3xl font-bold text-center md:text-start'>Мы разделяем 3 вида строений</p>
        <div className='flex flex-col md:flex-row gap-3 items-center md:items-stretch md:justify-between'>
          <div className='w-[350px] p-2 rounded-[0px_50px_0px_0px] shadow-2xl'>
            <img src={img8} alt="" />
            <div className='p-5'>
              <p className='text-2xl'>Жилые строения</p>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Дома	из	профилированого	бруса</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Дома	из	оцилиндрованого	бруса</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Каркасные	дома</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Дома	из	блока</p>
              </div>
            </div>
          </div>
          <div className='w-[350px] p-2 rounded-[0px_50px_0px_0px] shadow-2xl'>
            <img src={img9} alt="" />
            <div className='p-5'>
              <p className='text-2xl'>Коммерческие</p>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Базы	отдыха</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Гостинницы</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Рестораны</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Кафе</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Магазины</p>
              </div>
            </div>
          </div>
          <div className='w-[350px] p-2 rounded-[0px_50px_0px_0px] shadow-2xl'>
            <img src={img9} alt="" />
            <div className='p-5'>
              <p className='text-2xl'>Садовые и хоз</p>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Деревянные	бани</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Беседки</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Альтанки</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Детские	игровые	площадки</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Гаражи</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Деревянные	детские	домики</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Мангальные	зоны и	барбекю</p>
              </div>
              <div className='flex gap-3'>
                <p className='text-[#CB8734]'>{'>'}</p>
                <p className='text-md'>Кухни</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-[1300px] m-auto p-5'>
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
      <section className='flex flex-col md:flex-row md:justify-between items-center max-w-[1300px] m-auto p-5'>
        <div className='md:w-[600px] text-center md:text-start'>
          <p className=' text-4xl font-bold'>Заголовок текста для СЕО</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec. Tincidunt eget nullam non nisi est sit amet facilisis magna. Faucibus vitae aliquet nec ullamcorper sit amet risus. <br /><br />
            Aliquet nec ullamcorper sit amet risus nullam. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Commodo viverra maecenas accumsan lacus vel facilisis. <br /><br />
            Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Enim facilisis gravida neque convallis a.</p>
        </div>
        <img src={img11} alt="" />
      </section>
    </div>
  )
}


export default Home