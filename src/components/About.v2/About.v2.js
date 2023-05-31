import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import pdf from '../../static/files/resume.pdf'
import weather from '../../static/images/weather.png'
import bespoke from '../../static/images/bespoke.png'
import port from '../../static/images/port.png'

function Abouts() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const location = useLocation();
    const fragmentId = location.hash;
    console.log(fragmentId)

    return (
        <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div class="lg:flex lg:justify-between lg:gap-4">
                <header class="py-20 md:py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-32">
                    <div>
                        <h1 class="text-5xl font-bold tracking-tight mb-0 text-slate-200 sm:text-5xl">
                            <a href="/">Joshua Igbokwe</a>
                        </h1>
                        <h2 class="mt-3 mb-0 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                            I build accessible, inclusive products and digital <br/> experiences for the web.
                        </h2>
                        <p class="mt-4 max-w-xs leading-normal text-slate-400">
                            I'm a highly motivated and dedicated software engineer with a passion for leveraging technology to create innovative solutions.
                        </p>
                        <nav class="nav hidden lg:block" aria-label="In-page jump links">
                            <ul class="mt-16 w-max">
                                <li>
                                    <a className={`group flex items-center py-3 ${fragmentId.includes('#about') && 'active'}`} href="#about">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                        </span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            About
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a class={`group flex items-center py-3 ${fragmentId.includes('#projects') && 'active'}`} href="#projects">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                        </span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            projects
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main id='content' className='pt-24 lg:w-1/2 lg:py-32'>
                    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                        </div>
                        <div>
                            <p class="mb-4 font-medium">
                                My journey in the world of technology began during my time at Kwame Nkrumah University of Science & Technology, 
                                where I obtained a <span className='pink'> BSc. degree in Computer Engineering </span>. Throughout my academic journey, 
                                I gained a solid understanding of software engineering principles, including software development, 
                                object-oriented programming, and secure network systems.
                            </p>
                            <p class="mb-4 font-medium">
                                One of my proudest achievements is founding and owning <span className='pink'>Purple Mercury</span>, 
                                a food and beverage company that is driven by the mission to provide clean and safe drinking water to local communities.
                            </p>
                            <p class="font-medium">
                                When I'm not diving into lines of code or solving complex problems, 
                                you can find me on the football pitch, 
                                channeling my competitive spirit and love for the beautiful game. Whether it's playing with friends or cheering for my favorite team, football fuels my energy and keeps me on my toes.
                            </p>
                        </div>
                        <div className='mt-12'>
                            <Link to={pdf} target='_blank' download className="inline-flex items-center leading-tight font-semibold text-slate-200 group">
                                <span>
                                    <span class="border-b border-transparent pb-px transition group-hover:border-pink-500 motion-reduce:transition-none">View Full </span>
                                    <span class="whitespace-nowrap">
                                        <span class="border-b border-transparent pb-px transition group-hover:border-pink-500 motion-reduce:transition-none">Résumé</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </section>
                    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="projects">
                        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                        </div>
                        <div>
                            <ul className='group/list'>
                                <li className='mb-12'>
                                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div class="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-pink-500 focus-visible:text-pink-500  group/link text-base" href="https://cloud-zone.netlify.app/" target="_blank" rel="noreferrer" aria-label="React waether App">
                                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>React weather
                                                        <span class="inline-block">
                                                            &nbsp;App
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">
                                                A website where users can view the current weather, get future predictions, and view weather info of any location. This project include the principles of REST APIs, React, TailwindCSS and more.
                                            </p>
                                        </div>
                                        <img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                            class="rounded border-2 border-slate-200/50 transition group-hover:border-slate-200/70 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                            style={{color:'transparent'}} 
                                            src={weather}
                                        />
                                    </div>
                                </li>
                                <li className='mb-12'>
                                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div class="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-pink-500 focus-visible:text-pink-500  group/link text-base" href="https://jamrel.netlify.app/" target="_blank" rel="noreferrer" aria-label="21 Bespoke ecommerce App">
                                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>21 Bespoke E-commerce
                                                        <span class="inline-block">
                                                            &nbsp;App
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">
                                                An e-commerce websites where customers can view all the available items, get pricing information, add them to cart and eventually place an order. This project covers the principles of REST APIs, Django Python, React, TailwindCSS, and more.
                                            </p>
                                        </div>
                                        <img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                            class="rounded border-2 border-slate-200/50 transition group-hover:border-slate-200/70 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                            style={{color:'transparent'}} 
                                            src={bespoke}
                                        />
                                    </div>
                                </li>
                                <li className='mb-12'>
                                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div class="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-pink-500 focus-visible:text-pink-500  group/link text-base" href="https://joshigbokwe.netlify.app/" target="_blank" rel="noreferrer" aria-label="joshigbokwe.netlify.app (v1)">
                                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>joshigbokwe.netlify.app (v1)
                                                        <span class="inline-block">
                                                            &nbsp;
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </h3>
                                            <p class="mt-2 text-sm leading-normal">
                                                An old portfolio built on React, Styled Components, and more.
                                            </p>
                                        </div>
                                        <img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                            class="rounded border-2 border-slate-200/50 transition group-hover:border-slate-200/70 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                            style={{color:'transparent'}} 
                                            src={port}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-12'>
                            <Link to='/project' className="inline-flex items-center leading-tight font-semibold text-slate-200 group">
                                <span>
                                    <span class="border-b border-transparent pb-px transition group-hover:border-pink-500 motion-reduce:transition-none">View Full </span>
                                    <span class="whitespace-nowrap">
                                        <span class="border-b border-transparent pb-px transition group-hover:border-pink-500 motion-reduce:transition-none">Projects</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Abouts