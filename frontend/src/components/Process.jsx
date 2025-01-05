import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import process1 from '../assets/process1.jpg';
import process2 from '../assets/process2.jpg';

const Process = () => {
  return (
    <section className="max-padd-container py-16 xl:py-20">
      {/* containner */}
      <div className="flex flex-col gap-20 xl:flex-row">
        {/* left side */}
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="h3 max-w-[411px]">
            Peça sua comida favorita com apenas alguns cliques
          </h4>
          <p>
            Experimente a conveniência de pedir refeições deliciosas a qualquer
            hora, em qualquer lugar. Siga estes passos simples e receba sua
            comida favorita diretamente na sua porta.
          </p>
          <div className="my-7 flex flex-col gap-x-4">
            <div className="flexStart gap-x-4">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark />
              </span>
              <p>
                Explore uma grande variedade de pratos e sabores culinários.
              </p>
            </div>
            <div className="flexStart gap-x-4">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark />
              </span>
              <p>Escolha seus itens favoritos e adicione-os ao carrinho.</p>
            </div>
            <div className="flexStart gap-x-4">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark />
              </span>
              <p>Insira seus dados e confirme seu pedido com facilidade.</p>
            </div>
            <div className="flexStart gap-x-4">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark />
              </span>
              <p>
                Mantenha-se atualizado com rastreamento em tempo real até que
                sua comida chegue.
              </p>
            </div>
          </div>
        </div>
        {/* righ side */}
        <div className="flex-1 flex gap-6 xl:gap-12">
          <div>
            <img src={process1} alt="" className="rounded-xl" />
          </div>
          <div className="relative top-8">
            <img src={process2} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
