import React from 'react';
import { CartIcon } from '../components/CartIcon';
export default () => { 
    return(
        <section className="container mx-auto px-4 md:px-0">
            {/* Título de la empresa */}
            <p className="mb-3 uppercase text-orange font-bold tracking-wide">Sneaker Company</p>
            
            {/* Título del producto */}
            <h2 className="mb-4 font-bold text-3xl">Fall Limited Edition Sneakers</h2>
            
            {/* Descripción del producto */}
            <p className="mb-5 text-dark-grayish-blue">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            
            {/* Sección de precio y descuento */}
            <div className="mb-5 grid gap-4 grid-cols-3 items-center font-bold md:grid-cols-[1fr_3fr] md:gap-1">
                {/* Precio actual del producto */}
                <span className="text-3xl">$125.00</span>
                
                {/* Etiqueta de descuento (50%) */}
                <span className="mr-auto rounded-md bg-orange-pale py-1 px-1 ml-3 text-orange">50%</span>
                
                {/* Precio original tachado */}
                <span className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">$250.00</span>
            </div>
            
            {/* Sección de cantidad y botón de agregar al carrito */}
            <div className="grid grid-cols-3 gap-4 font-bold md:frid-cols-[1fr_1.7fr]">
                <div className="col-span-3 bg-gray-100 flex items-center justify-between rounded-md py-3 px-5 md:col-span-1">
                    {/* Botones de cantidad (- y +) */}
                    <button className='text-4xl text-orange '>-</button>
                    <span className='text-2xl'>0</span>
                    <button className='text-4xl text-orange'>+</button>
                </div>
                
                {/* Botón "Add to cart" */}
                <button className="col-span-3 flex items-center bg-orange text-white rounded-md py-3 justify-center gap-x-3 hover:bg-orange-300 transition-all md:col-span-1">
                    {/* Icono de carrito de compras */}
                    <CartIcon />
                    
                    {/* Texto "Add to cart" */}
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    )
}