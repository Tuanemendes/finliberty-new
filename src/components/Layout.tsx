import Head from 'next/head'
import { type } from 'os'
import React from 'react'

type LayoutPros = {
	title : string,
	children: React.ReactNode
}

const Layout = ({title,children}:LayoutPros) => {
  return (
    <>
			<Head>
					<title>{title ? title + '-FinLiberty' : 'FinLiberty'}</title>
					<meta name="description" content="Controle Financeiro"></meta>
					<link rel="icon" href="/favicon.ico"></link>
			</Head>
			<div className='flex min-h-screen flex-col justify-between'>
					<header className='bg-gray-800 text-white'>
							<div className='container mx-auto p-4 flex justify-between items-center'>
									<h1 className='font-bold text-2xl'>FinLiberty</h1>
							
							</div>
					</header>
					<main className='bg-gray-300 text-orange-700 flex-1'>
							<div className='container mx-auto p-4'>
									<h2 className='font-bold mb-4 text-center text-4xl'>Controle Financeiro</h2>
									{children}
							</div>
					</main>
					<footer className='bg-gray-800 text-white text-center'>
								 <p>Copyright @ 2023 FinLiberty by Tuane Mendes</p>
					</footer>
			</div>   
    </>
  )
}

export default Layout
