'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import { FaArrowUpRightFromSquare, FaCopy, FaExclamation, FaJava, FaTelegram } from "react-icons/fa6";
import { FaExclamationCircle, FaTelegramPlane } from "react-icons/fa";
import { PiGameControllerBold } from "react-icons/pi";
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-dark selection:bg-emerald-800/30'>
        <div className='h-18 absolute w-full flex items-center py-4'>
          <div className='px-6 z-[10] mx-auto flex w-full container gap-6 justify-between items-center'>
            <div className='flex items-center gap-2'><img src='/AvinesiaFlag.png' width={43.4} /><div className='text-lg font-bold'>Авинесия</div></div>
            <div onClick={() => {
              window.open("https://id.gooseland.cc/user", "_self")
            }} className='bg-green-500 bg-opacity-5 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer rounded-2xl px-4 py-2 flex gap-2 items-center'><FaArrowUpRightFromSquare /> Личный кабинет</div>
          </div>
        </div>
        <div className="relative z-[9] overflow-hidden bg-gradient-to-b from-green-50/50 to-green-50/75 px-6 py-24 pt-32 dark:from-zinc-900 dark:via-green-950 dark:to-green-950/50 lg:pb-40 lg:pt-56">
          <div className="homeText relative z-20">
            <h1 className="font-manrope mb-5 text-center text-4xl font-extrabold leading-normal tracking-tight text-black dark:text-white md:text-5xl lg:mb-8 lg:text-6xl lg:leading-tight">
              <span className="bg-gradient-to-b from-green-500 to-green-600 bg-clip-text text-transparent dark:from-green-200 dark:to-green-600">Самая лучшая страна </span>
              на Murbyte
            </h1>
            <p className="mx-auto mb-12 max-w-xl text-center leading-loose text-zinc-800 dark:text-zinc-200 lg:text-xl lg:leading-relaxed">У нас идеальные условия для жизни и процветания: народные проекты, дружелюбное сообщество и регулярные ивенты</p>
            <div className='flex flex-col md:flex-row mb-8 gap-6 justify-center'>
              <div onClick={() => { window.open("#join", "_self") }} className='bg-green-600 bg-shine animate-shine hover:bg-green-700 px-6 py-3 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <PiGameControllerBold size={28} className='absolute' />
                <div className='pl-9'>Вступить в Авинесию</div>
              </div>
              <div onClick={() => { window.open("https://t.me/avinesianunion") }} className='bg-dark5 hover:bg-dark4 px-6 py-3 ring-1 ring-zinc-700 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <FaTelegramPlane size={28} className='absolute' />
                <div className='pl-9'>Наш телеграм канал</div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-24 flex flex-col gap-12 mx-auto md:px-6 container'>
          <div className='hidden flex-col items-center'>
            <div id='join' className='p-6 md:rounded-2xl gap-4 flex flex-col items-center justify-center bg-dark4'>
              <div className='text-4xl mb-6 font-black'>Сервер открывается 6 июля</div>
              <div className='text-9xl mb-10'>🦋</div>
              <div onClick={() => { window.open("https://t.me/avinesiangovernment") }} className='bg-green-600 hover:bg-green-700 w-full md:w-1/2 px-6 py-3 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <PiGameControllerBold size={28} className='absolute' />
                <div className='pl-9'>Подать заявку заранее</div>
              </div>
              <div onClick={() => { window.open("https://t.me/+d7fWwtHZ4ow5NzEy") }} className='bg-dark5 hover:bg-dark4 px-6 w-full md:w-1/2 py-3 ring-1 ring-zinc-700 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <FaTelegramPlane size={28} className='absolute' />
                <div className='pl-9'>Подать заявку в чат</div>
              </div>
              <div className='text-sm text-dark3 md:w-1/2'>Чтобы подать заявку заранее, вам надо написать на аккаунт Правительства Авинесии и подать заявку в чат</div>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12'>
            <div className='block relative md:hidden bg-dark3 md:rounded-2xl w-full h-96'>
              <div className='w-full h-full bg-[url(/ph1.jpg)] bg-cover md:rounded-2xl'></div>
              <div className='absolute bottom-0 right-0 text-zinc-300 m-4 z-[10] bg-dark2 px-2 rounded-md bg-opacity-50 select-none'>Картинка-пример, на новом сезоне будет другое</div>
            </div>
            <div className='flex flex-col w-fit px-4 md:px-0'>
              <div className='text-4xl font-bold mb-6'>Влияние на сервере</div>
              <div className='text-xl mb-4'>С нами вы окажетесь в центре всех событий, где каждый игрок находит свое место. Наше влияние не ограничивается городскими стенами – мы воплощаем инновации и создаем новые стандарты в игровом мире</div>
              <div className='text-xl'>Авинесия – это не просто город, это сообщество, которое заботится о каждом его участнике. Мы строим не только здания, но и дружеские связи, поддерживая друг друга и обеспечивая безопасность нашего дома. У нас каждый игрок находит свое место: будь то участие в наших многочисленных проектах, увлекательных ивентах или просто приятное общение в дружественной атмосфере</div>
            </div>
            <div className='relative hidden md:block bg-dark3 md:rounded-2xl w-full h-96'>
              <div className='w-full h-full bg-[url(/ph1.jpg)] bg-cover md:rounded-2xl'></div>
              <div className='absolute bottom-0 right-0 text-zinc-300 m-4 z-[10] bg-dark2 px-2 rounded-md bg-opacity-50 select-none'>Картинка-пример, на новом сезоне будет другое</div>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12'>
            <div className='relative bg-dark3 md:rounded-2xl w-full h-96'>
              <div className='w-full h-full bg-[url(/ph2.jpg)] bg-cover md:rounded-2xl'></div>
              <div className='absolute bottom-0 right-0 text-zinc-300 m-4 z-[10] bg-dark2 px-2 rounded-md bg-opacity-50 select-none'>Картинка-пример, на новом сезоне будет другое</div>
            </div>
            <div className='flex flex-col w-fit px-4 md:px-0'>
              <div className='text-4xl font-bold mb-6'>Проекты и ивенты</div>
              <div className='text-xl mb-4'>Погрузитесь в захватывающий мир проектов и ивентов от Авинесии! У нас не мало завершенных проектов, и еще огромное количество впереди. Уникальность каждого из них заключается в том, что в них может принять участие любой, включая тебя! И это еще не все – мы регулярно устраиваем различные ивенты, чтобы каждый мог насладиться яркими впечатлениями и веселым времяпрепровождением!</div>
              <ul className='text-xl list-disc pl-5'>
                <li>Метро</li>
                <li>Сельхоз</li>
                <li>Дом Правительства</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-6 gap-6 flex flex-col items-center md:container mx-auto px-6'>
          <div className='text-4xl bg-gradient-to-b text-transparent text-center font-bold bg-clip-text from-green-200 to-green-600'>Хотите вступить?</div>
          <div className='font-medium text-2xl text-center md:w-[30%]'>
            Мы ждём вас в Авинесии — осталось всего несколько шагов до вступления в Авинесию
          </div>
          <div className='grid grid-rows-2 gap-4 md:gap-0 md:grid-cols-2 md:w-[70%]'>
            <div className='p-8 bg-dark5 rounded-2xl md:rounded-l-3xl rounded-r-none text-lg gap-8 flex flex-col'>
              <div className='flex gap-4'>
                <div className='font-bold bg-dark3 rounded-full h-8 w-8 flex justify-center items-center'>1</div>
                <div className='flex flex-col'>
                  <div>Подать заявку в <span onClick={() => { window.open("https://t.me/+d7fWwtHZ4ow5NzEy") }} className='text-green-500 hover:text-green-600 cursor-pointer'>чат Авинесии</span></div>
                  <div>Вступить в <span onClick={() => { window.open("https://discord.gg/tMqW9SrT3X") }} className='text-green-500 hover:text-green-600 cursor-pointer'>Дискорд сервер</span></div>
                  <div className='text-sm text-green-500 text-end'>! Необязательный шаг !</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='font-bold bg-dark3 rounded-full h-8 w-8 flex justify-center items-center'>2</div>
                <div className='flex flex-col'>
                  <div>Зайти на сервер</div>
                  <div onClick={() => {
                    alert("Скопировано!")
                    navigator.clipboard.writeText("play.gooseland.cc")
                  }} className='bg-dark4 p-2 rounded-2xl flex justify-between items-center gap-2 cursor-pointer hover:bg-dark3 select-none'>play.gooseland.cc<div className='rounded-2xl p-2'><FaCopy /></div></div>
                  <div>Пройти регистрацию на КПП</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='font-bold bg-dark3 rounded-full h-8 w-8 flex justify-center items-center'>3</div>
                <div className='flex flex-col'>
                  <div>Поздравляем, вы временный житель</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='font-bold bg-dark3 rounded-full h-8 w-8 flex justify-center items-center'>4</div>
                <div className='flex flex-col'>
                  <div>Прийти на ближайшее собрание</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='font-bold bg-dark3 rounded-full h-8 w-8 flex justify-center items-center'>5</div>
                <div className='flex flex-col'>
                  <div>Поздравляем, вы гражданин!</div>
                </div>
              </div>
            </div>
            <div className='p-8 bg-dark2 rounded-2xl md:rounded-r-3xl rounded-l-none text-lg gap-8 flex flex-col'>
              <div className='flex gap-2'>
                <div className='pt-1'><FaExclamationCircle /></div>
                <div>Java версия — 1.21</div>
              </div>
              <div className='flex gap-2'>
                <div className='pt-1'><FaExclamationCircle /></div>
                <div>Bedrock версия — 1.21</div>
              </div>
              <div className='flex gap-2'>
                <div className='pt-1'><FaExclamationCircle /></div>
                <div className='w-fit'>Доступно как с пиратки, так и с лицензии</div>
              </div>
              <div className='flex gap-2'>
                <div className='pt-1 text-red-500'><FaExclamationCircle /></div>
                <div className='w-fit flex items-center gap-2 flex-col'>Для игры из Украины, используйте IP <span onClick={() => {
                  alert("Скопировано!")
                  navigator.clipboard.writeText("ua.gooseland.cc")
                }} className='bg-dark4 hover:bg-dark3 cursor-pointer flex items-center gap-2 select-none rounded-md p-2'>ua.gooseland.cc<div className='rounded-2xl p-2'><FaCopy /></div></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-between mx-auto px-6 py-6 container border-t border-dark3'>
          <div className='flex flex-col gap-1'>
            <div className='text-dark3 font-bold'>Официальный сайт Авинесии</div>
          </div>
        </div>
      </section>
    </main>
  );
}
