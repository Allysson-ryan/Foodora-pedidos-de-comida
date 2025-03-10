import React, { useContext, useState } from 'react';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { ShopContext } from '../Context/ShopContext';

const Item = ({ food }) => {
  const { currency } = useContext(ShopContext);
  const [size, setSize] = useState(food.sizes[0]);

  return (
    <div className=" rounded-xl bg-white relative">
      {/* foto */}
      <div className="flexCenter m-6 rounded-full absolute left-0 right-0 -top-[111px]">
        <img
          src={food.image}
          alt=""
          height={177}
          width={177}
          className="object-contain aspect-square rounded-xl"
        />
      </div>
      {/* info */}
      <div className="mx-4 bg-white pt-20">
        {/* titulo e descrição */}
        <div className="py-3">
          <h4 className="bold-16 line-clamp-1 mb-1">{food.name}</h4>
          <div className="flex items-start justify-between pb-1">
            <h5 className="medium-14 mb-1">{food.category}</h5>
            <div className="flex items-center justify-start gap-x-1 text-secondary bold-14">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
              <span className="text-tertiary">4.5</span>
            </div>
          </div>
          <p className="line-clamp-2">{food.description}</p>
        </div>
        {/* food size */}
        <div className="flexBetween mb-2">
          <div className="flex gap-1">
            {[...food.sizes]
              .sort((a, b) => {
                const order = ['H', 'F', 'S', 'M', 'L', 'XL'];
                return order.indexOf(a) - order.indexOf(b);
              })
              .map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`${item === size ? 'ring-1 ring-slate-900/10' : ''} h-6 w-8 bg-primary text-xs font-semibold rounded-sm`}
                >
                  {item}
                </button>
              ))}
          </div>
          <button className="flexCenter gap-x-1 text-[18px] bg-secondary text-white rounded-sm p-[3px] ">
            <TbShoppingBagPlus />
          </button>
        </div>
        {/* order info (temporary) */}
        <div className="flexBetween rounded-xl pb-3 text-[13px] font-semibold">
          <div className="flex flex-col gap-1">
            <h5>Preparo</h5>
            <p className="text-xs">5min</p>
          </div>
          <hr className="h-8 w-[1px] bg-tertiary/10 border-none" />
          <div className="flex flex-col gap-1">
            <h5>Cozimento</h5>
            <p className="text-xs">20min</p>
          </div>
          <hr className="h-8 w-[1px] bg-tertiary/10 border-none" />
          <div className="flex flex-col gap-1">
            <h5>Preço</h5>
            {/* Dinamically update the price */}
            <p className="text-xs text-secondary">
              {currency}
              {food.price[size]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
