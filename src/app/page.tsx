'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import { FaArrowUpRightFromSquare, FaCopy, FaExclamation, FaJava, FaTelegram } from "react-icons/fa6";
import { FaExclamationCircle, FaTelegramPlane } from "react-icons/fa";
import { PiGameControllerBold } from "react-icons/pi";
import { AiOutlineRight } from "react-icons/ai";
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='selection:bg-emerald-800/30'>
        <div className='h-18 absolute w-full flex items-center py-4'>
          <div className='px-6 z-[10] mx-auto flex w-full container gap-6 justify-between items-center'>
            <div className='flex items-center gap-2'><img src='/AvinesiaFlag.png' width={43.4} /><div className='text-lg font-bold'>Авинесия</div></div>
            <div onClick={() => {
              window.open("https://id.gooseland.cc/", "_self")
            }} className='bg-blue-500 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-20 cursor-pointer rounded-2xl px-4 py-2 flex gap-2 items-center'><FaArrowUpRightFromSquare /> Личный кабинет</div>
          </div>
        </div>
        <div className="relative z-[9] overflow-hidden from-teal-50/50 to-teal-50/75 px-6 py-24 pt-32 dark:from-zinc-900 dark:via-green-950 dark:to-green-950/50 lg:pb-40 lg:pt-[6.75rem]">
          <div className='flex mb-2 flex-col items-center'>
            <div className='bg-teal-700 p-4 rounded-2xl flex flex-col gap-2 hover:bg-teal-600 cursor-pointer' onClick={() => window.open("https://t.me/avinesianunion")}>
              <div className='flex justify-between items-center'>
                <div className='font-bold'>GL3 завершён</div>
                <div><AiOutlineRight /></div>
              </div>
              <div className='text-sm'>Уже скоро — запуск межсезонья</div>
              <div className='text-xs text-gray-300'>Подпишитесь на Телеграм канал, чтобы не пропустить</div>
            </div>
          </div>
          <div className="homeText relative z-20">
            <h1 className="font-manrope mb-5 text-center text-4xl font-extrabold leading-normal tracking-tight text-black dark:text-white md:text-5xl lg:mb-8 lg:text-6xl lg:leading-tight">
              <span className="">Самая лучшая страна </span>
              на Murbyte
            </h1>
            <p className="mx-auto mb-12 max-w-xl text-center leading-loose text-zinc-800 dark:text-zinc-200 lg:text-xl lg:leading-relaxed">У нас идеальные условия для жизни и процветания: народные проекты, дружелюбное сообщество и регулярные ивенты</p>
            <div className='flex flex-col md:flex-row mb-8 gap-6 justify-center'>
              <div onClick={() => { window.open("#join", "_self") }} className='bg-teal-600 bg-shine animate-shine hover:bg-teal-500 px-6 py-3 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <PiGameControllerBold size={28} className='absolute' />
                <div className='pl-9'>Вступить в Авинесию</div>
              </div>
              <div onClick={() => { window.open("https://t.me/avinesianunion") }} className='bg-teal-600 hover:bg-teal-500 px-6 py-3 ring-1 ring-teal-500 rounded-2xl select-none gap-2.5 font-medium flex items-center cursor-pointer'>
                <FaTelegramPlane size={28} className='absolute' />
                <div className='pl-9'>Наш телеграм канал</div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-24 flex flex-col gap-12 mx-auto md:px-6 container'>
          <div className='hidden flex-col items-center'>
            <div className='p-6 md:rounded-2xl gap-4 flex flex-col items-center justify-center bg-dark4'>
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
            <div className='relative bg-dark3 md:rounded-2xl w-full h-96'>
              <div className='w-full h-full bg-[url(/ph3.jpg)] bg-cover md:rounded-2xl'></div>
              <div className='absolute bottom-0 right-0 text-zinc-300 m-4 z-[10] bg-dark2 px-2 rounded-md bg-opacity-50 select-none'>Картинка-пример, на Межсезонье будет другой сид</div>
            </div>
            <div className='flex flex-col w-fit px-4 md:px-0'>
              <div className='text-4xl font-bold mb-6'>Межсезонье «Летающие острова»</div>
              <div className='text-xl mb-4'>Межсезонье в стиле первого Мурбайта, но лучше. Исследуйте захватывающий новый мир Летающих островов. Мы немного поменяли концепцию сервера, теперь это Авинесия против отшельников! Новые экспериментальные фичи и интересные ивенты ждут нас. Множество новых достижений.</div>
              <ul className='text-xl list-disc pl-5 hidden'>
                <li>Метро</li>
                <li>Сельхоз</li>
                <li>Дом Правительства</li>
              </ul>
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
          <div id='join' className='text-4xl text-center font-bold'>Хотите вступить?</div>
          <div className='font-medium text-2xl text-center md:w-[30%]'>
            Мы ждём вас в Авинесии
          </div>
          <div className='flex justify-center md:w-[70%]'>
            <div className='p-8 bg-teal-800 rounded-2xl md:rounded-3xl text-lg gap-8 flex flex-col'>
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
                <div className='pt-1'><FaExclamationCircle /></div>
                <div className='w-fit flex items-start gap-2 flex-col'>Для игры, используйте IP <span onClick={() => {
                  alert("Скопировано!")
                  navigator.clipboard.writeText("play.gooseland.cc")
                }} className='bg-teal-600 hover:bg-teal-700 cursor-pointer flex items-center gap-2 select-none rounded-md p-2'>play.gooseland.cc<div className='rounded-2xl p-2'><FaCopy /></div></span></div>
              </div>
              <div className='flex gap-2'>
                <div className='pt-1 text-red-500'><FaExclamationCircle /></div>
                <div className='w-fit flex items-start gap-2 flex-col'>Для игры из Украины, используйте IP <span onClick={() => {
                  alert("Скопировано!")
                  navigator.clipboard.writeText("ua.gooseland.cc")
                }} className='bg-teal-600 hover:bg-teal-700 cursor-pointer flex items-center gap-2 select-none rounded-md p-2'>ua.gooseland.cc<div className='rounded-2xl p-2'><FaCopy /></div></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-between mx-auto px-6 py-6 container border-t'>
          <div className='flex flex-col gap-1'>
            <div className='font-bold'>Официальный сайт Авинесии</div>
          </div>
        </div>
      </section>
    </main>
  );
}
