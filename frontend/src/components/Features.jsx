import React from 'react'
import shipping from "../assets/shipping-fast.svg";
import hot from "../assets/hot-food.svg";
import fresh from "../assets/fresh-food.svg";
import hat from "../assets/hat-chef.svg";

const Features = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28 !pb-12'>
      <div className='max-padd-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12'>
        <div className='flexCenter flex-col gap-3'>
          <img src={shipping} alt="" height={44} width={44}/>
          <div className='flexCenter flex-col'>
            <h5 className='h5'> Entrega Rápida </h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none'/>
          </div>
          <p className='text-center'>Receba seu pedido com rapidez e confiança com nosso serviço ágil.</p>
        </div>

        <div className='flexCenter flex-col gap-3'>
          <img src={hot} alt="" height={44} width={44}/>
          <div className='flexCenter flex-col'>
            <h5 className='h5'> Comidas Quentes</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none'/>
          </div>
          <p className='text-center'>Refeições quentes, preparadas na hora, entregues fresquinhas a você.</p>
        </div>

        <div className='flexCenter flex-col gap-3'>
          <img src={fresh} alt="" height={44} width={44}/>
          <div className='flexCenter flex-col'>
            <h5 className='h5'> Comidas Frescas</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none'/>
          </div>
          <p className='text-center'>Servimos refeições feitas com os ingredientes mais frescos todo dia.</p>
        </div>

        <div className='flexCenter flex-col gap-3'>
          <img src={hat} alt="" height={44} width={44}/>
          <div className='flexCenter flex-col'>
            <h5 className='h5'> Chefs especializados </h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none'/>
          </div>
          <p className='text-center'>Nossos chefs habilidosos elaboram cada prato com paixão e precisão</p>
        </div>
      </div>
    </section>
  )
}

export default Features
