import React, { useEffect, useState } from 'react'
import img from '../assets/Vector 14.png'
import img1 from '../assets/иконка (10).png'
import img2 from '../assets/иконка (11).png'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'


const Catalog = () => {
    let [users, setUsers] = useState([])
    let [open, setOpen] = useState(false)
    let [open2, setOpen2] = useState(false)
    let [open3, setOpen3] = useState(false)
    let [name2, setName2] = useState('')
    let [description, setDescription] = useState('')
    let [idx, setIdx] = useState(null)
    let [idx2, setIdx2] = useState(null)
    let api = 'https://to-dos-api.softclub.tj/api/to-dos'
    let apiImg = 'https://to-dos-api.softclub.tj/images'
    async function getUsers() {
        try {
            const { data } = await axios.get(api)
            setUsers(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    async function deleteUser(id) {
        try {
            await axios.delete(`${api}?id=${id}`)
            getUsers()
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteImage(id) {
        try {
            await axios.delete(`${api}/images/${id}`)
            getUsers()
        } catch (error) {
            console.error(error);
        }
    }

    async function addUser(e) {
        e.preventDefault()
        let formData = new FormData()
        formData.append("name", e.target['name'].value)
        formData.append("description", e.target['desc'].value)
        let image = e.target['images'].files
        for (let i = 0; i < image.length; i++) {
            formData.append("Images", image[i])
        }
        try {
            await axios.post(api, formData)
            getUsers()
            setOpen(false)
        } catch (error) {
            console.error(error);
        }
    }

    async function addImage(e) {
        e.preventDefault()
        let formData = new FormData()
        let image = e.target['images'].files
        for (let i = 0; i < image.length; i++) {
            formData.append("Images", image[i])
        }
        try {
            await axios.post(`${api}/${idx2}/images`, formData)
            getUsers()
            setOpen3(false)
        } catch (error) {
            console.error(error);
        }
    }

    async function editUser() {
        try {
            await axios.put(api, { name: name2, description: description, id: idx })
            getUsers()
            setOpen(false)
        } catch (error) {
            console.error(error);
        }
    }

    async function CheckBoxx(id) {
        try {
            await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`)
            getUsers()
        } catch (error) {
            console.error(error);
        }
    }

    let navigate = useNavigate()

    return (
        <div>
            <section className='max-w-[1300px] m-auto'>
                <p>Главная страница / Жилое</p>
                <div className='flex flex-col md:flex-row items-center text-center justify-between'>
                    <p className='text-4xl font-bold'>Каталог жилых строений</p>
                    <input type="text" placeholder='Поиск по жилым строениям...' className='border-b-2 w-[300px]' />
                </div>
                {open && (
                    <div className='flex gap-2'>
                        <input className='border-2 p-2 rounded-3xl' type="text" value={name2} onChange={({ target }) => setName2(target.value)} name='name' />
                        <input className='border-2 p-2 rounded-3xl' type="text" value={description} onChange={({ target }) => setDescription(target.value)} name='desc' />
                        <button className='border-2 p-2 rounded-3xl' onClick={editUser}>save</button>
                    </div>
                )}
                {open2 && (
                    <form onSubmit={(e) => addUser(e)}>
                        <input className='border-2 p-2 rounded-3xl' type="text" name='name' />
                        <input className='border-2 p-2 rounded-3xl' type="text" name='desc' />
                        <input className='border-2 p-2 rounded-3xl' type="file" name='images' />
                        <button className='border-2 p-2 rounded-3xl' type='submit'>save</button>
                    </form>
                )}
                {open3 && (
                    <form onSubmit={(e) => addImage(e)}>
                        <input className='border-2 p-2 rounded-3xl' type="file" name='images' />
                        <button className='border-2 p-2 rounded-3xl' type='submit'>save</button>
                    </form>
                )}
                <center>
                    <Button onClick={() => setOpen2(true)}>add user</Button>
                </center>
                <div className='flex justify-between'>
                    <aside className='w-[20%] hidden md:flex flex-col items-start'>
                        <p className='font-bold'>Дома	и	жилые	строения</p>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Дома</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Дома	из профилированого	бруса</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Дома из оцилиндрованого	бруса</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Каркасные	дома</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Дома	из	блока</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Дачи</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Коттеджи</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Виллы</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Усадьбы</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Особняки</p>
                        </div>
                        <p className='font-bold'>Коммерческие	строения</p>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Базы	отдыха</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Гостинницы</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Рестораны</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Кафе</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Магазины</p>
                        </div>
                        <p className='font-bold'>Садовые	и	хоз	постройки</p>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Деревянные	бани из	оцилиндрованого бруса</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Деревянные	бани из профилированого бруса</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Каркасные	конструкции</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Беседки</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Альтанки</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Гаражи</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Кухни</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Детские	игровые площадки</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Деревянные	детские домики</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Мангальные	зоны и	барбекю</p>
                        </div>
                        <div className='flex gap-10 shadow-md p-5 items-center'>
                            <p>Сортировать по:</p>
                            <img src={img} alt="" />
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Алфавиту</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Популярности</p>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[#CB8734] text-xl font-black'>{'>'}</p>
                            <p>Цене</p>
                        </div>
                        <div className='flex gap-10 items-center shadow-md p-5'>
                            <p>Площадь (м2):</p>
                            <img src={img} alt="" />
                        </div>
                        <input type="range" />
                    </aside>
                    <aside className='w-[80%] flex flex-wrap gap-5 justify-center items-start'>
                        {users.map((e) => {
                            return (
                                <div key={e.id} className='w-[300px] shadow-xl p-5'>
                                    {e.images.map((im) => {
                                        return (
                                            <div key={im.id}>
                                                <img className='w-full h-60' src={`${apiImg}/${im.imageName}`} alt="" />
                                                <button onClick={() => deleteImage(im.id)} className='py-2 px-5 bg-red-500 text-white rounded-[10px_0px_10px_0px]'>delete</button>
                                            </div>
                                        )
                                    })}
                                    <p>{e.name}</p>
                                    <p>{e.description}</p>
                                    <p className={e.isCompleted ? 'text-green-300' : 'text-red-300'}>{e.isCompleted ? 'active' : 'inactive'}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center'>
                                            <img src={img1} alt="" />
                                            <p>7,5х9 м</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <img src={img2} alt="" />
                                            <p>135 м2</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <button onClick={() => deleteUser(e.id)} className='py-2 px-5 bg-red-600 text-white rounded-2xl'>delete</button>
                                        <button onClick={() => {
                                            setDescription(e.description)
                                            setName2(e.name)
                                            setIdx(e.id)
                                            setOpen(true)
                                        }} className='py-2 px-5 bg-green-600 text-white rounded-2xl'>edit</button>
                                        <button onClick={() => navigate(`/info/${e.id}`)} className='py-2 px-5 bg-blue-600 text-white rounded-2xl'>info</button>
                                        <input type="checkbox" className='w-5 h-5' onChange={() => CheckBoxx(e.id)} checked={e.isCompleted} />
                                    </div>
                                    <button onClick={() => {
                                        setOpen3(true)
                                        setIdx2(e.id)
                                    }} className='py-2 px-5 bg-yellow-600 text-white rounded-2xl block m-auto'>addImage</button>
                                </div>
                            )
                        })}
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default Catalog