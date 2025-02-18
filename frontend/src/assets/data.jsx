import curry from '../assets/categories/curry.svg';
import pizza from '../assets/categories/pizza.svg';
import rice from '../assets/categories/rice.svg';
import deserts from '../assets/categories/deserts.svg';
import fruits from '../assets/categories/fruits.svg';
import drinks from '../assets/categories/drinks.svg';

import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_6 from './food_6.png';
import food_7 from './food_7.png';
import food_8 from './food_8.png';
import food_9 from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import food_12 from './food_12.png';
import food_13 from './food_13.png';
import food_14 from './food_14.png';
import food_15 from './food_15.png';
import food_16 from './food_16.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_19 from './food_19.png';
import food_20 from './food_20.png';
import food_21 from './food_21.png';
import food_22 from './food_22.png';
import food_23 from './food_23.png';
import food_24 from './food_24.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';
import food_31 from './food_31.png';
import food_32 from './food_32.png';
import food_33 from './food_33.png';
import food_34 from './food_34.png';
import food_35 from './food_35.png';
import food_36 from './food_36.png';
import food_37 from './food_37.png';
import food_38 from './food_38.png';
import food_39 from './food_39.png';
import food_40 from './food_40.png';
import food_41 from './food_41.png';
import food_42 from './food_42.png';
import food_43 from './food_43.png';
import food_44 from './food_44.png';
import food_45 from './food_45.png';
import food_46 from './food_46.png';
import food_47 from './food_47.png';
import food_48 from './food_48.png';

export const categories = [
  {
    name: 'Curry',
    image: curry,
  },
  {
    name: 'Pizza',
    image: pizza,
  },
  {
    name: 'Arroz',
    image: rice,
  },
  {
    name: 'Sobremesas',
    image: deserts,
  },
  {
    name: 'Bebidas',
    image: drinks,
  },
  {
    name: 'Frutas',
    image: fruits,
  },
];

export const foods = [
  // Curry Products
  {
    _id: '1',
    name: 'Curry de Frango Picante',
    image: food_1,
    price: { H: 5, F: 10 },
    description:
      'Nosso Curry de Frango Picante é feito com pedaços macios de frango cozidos em uma saborosa mistura de especiarias.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '2',
    name: 'Curry de Grão-de-Bico Vegetariano',
    image: food_2,
    price: { H: 10, F: 20 },
    description:
      'Nosso Curry de Grão-de-Bico Vegetariano é um prato substancioso feito com grão-de-bico macio cozido em um molho rico à base de tomate.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '3',
    name: 'Carne Vindaloo',
    image: food_3,
    price: { H: 20, F: 30 },
    description:
      'Experimente o sabor ardente do nosso Carne Vindaloo, um prato tradicional indiano com um molho picante e agridoce.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '4',
    name: 'Paneer Butter Masala Cremoso',
    image: food_4,
    price: { H: 15, F: 20 },
    description:
      'Nosso Paneer Butter Masala Cremoso apresenta cubos macios de paneer, um queijo indiano de pasta suave cozidos em um molho de tomate.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '5',
    name: 'Lamb Rogan Josh',
    image: food_5,
    price: { H: 5, F: 10 },
    description:
      'Experimente nosso Lamb Rogan Josh, um prato tradicional indiano de Caxemira com cordeiro macio em um molho de curry perfumado.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '6',
    name: 'Curry de Peixe com Leite de Coco',
    image: food_6,
    price: { H: 10, F: 20 },
    description:
      'Delicie-se com nosso Curry de Peixe, feito com filés de peixe frescos cozidos em um molho cremoso de leite de coco.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '7',
    name: 'Curry de Ovo com Especiarias',
    image: food_7,
    price: { H: 5, F: 10 },
    description:
      'Nosso Curry de Ovo é um prato simples, mas saboroso, com ovos cozidos em um molho temperado.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '8',
    name: 'Mutton Korma',
    image: food_8,
    price: { H: 15, F: 20 },
    description:
      'Saboreie nosso Mutton Korma, um prato tradicional indiano feito com pedaços macios de carne de carneiro em um molho rico e cremoso.',
    category: 'Curry',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },

  // Pizza Products
  {
    _id: '9',
    name: 'Pizza Margherita',
    image: food_9,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Nossa Pizza Margherita é um clássico, coberta com mussarela fresca, tomates e manjericão.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '10',
    name: 'Pizza de Pepperoni',
    image: food_10,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Aproveite nossa Pizza de Pepperoni, carregada com fatias de pepperoni picante sobre uma cama de queijo derretido.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '11',
    name: 'Pizza de Frango com Barbecue',
    image: food_11,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Experimente nossa Pizza de Frango com Molho Barbecue, coberta com pedaços de frango macio, molho barbecue e cebolas roxas.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '12',
    name: 'Pizza Vegetariana',
    image: food_12,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Nossa Pizza Vegetariana é uma mistura colorida de pimentões, cebolas, cogumelos e azeitonas sobre uma base de queijo',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '13',
    name: 'Pizza Havaiana',
    image: food_13,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Saboreie o gosto doce e salgado de nossa Pizza Havaiana, coberta com presunto e abacaxi.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '14',
    name: 'Pizza Quatro Queijos',
    image: food_14,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Delicie-se com nossa Pizza Quatro Queijos, com uma mistura de mozzarella, cheddar, parmesão e queijo azul.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '15',
    name: 'Pizza de Linguiça Picante',
    image: food_15,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Nossa Pizza de Linguiça Picante é coberta com linguiça quente, pimentões e cebolas para um toque ardente.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '16',
    name: 'Pizza de Cogumelo com Trufa',
    image: food_16,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      'Experimente os sabores terrosos da nossa Pizza de Cogumelo com Trufa, coberta com cogumelos salteados e óleo de trufa.',
    category: 'Pizza',
    sizes: ['S', 'M', 'L', 'XL'],
    date: 1716634345448,
    popular: false,
  },

  // Rice Products
  {
    _id: '17',
    name: 'Arroz indiano com Frango',
    image: food_17,
    price: { H: 15, F: 20 },
    description:
      'Nosso Arroz indiano com Frango é um prato típico indiano de arroz aromático, feito com pedaços de frango macios e especiarias aromáticas.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '18',
    name: 'Arroz Frito Vegetariano',
    image: food_18,
    price: { H: 15, F: 20 },
    description:
      'Aproveite nosso Arroz Frito Vegetariano, uma mistura de arroz, legumes frescos e molho de soja para uma refeição saborosa.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '19',
    name: 'Pilaf de Camarão',
    image: food_19,
    price: { H: 15, F: 20 },
    description:
      'Saboreie nosso Pilaf de Camarão, um prato de arroz saboroso com camarões cozidos em um caldo aromático.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '20',
    name: 'Pulao de Carne',
    image: food_20,
    price: { H: 15, F: 20 },
    description:
      'Nosso Pulao de Carne é um prato substancioso, com pedaços de carne macia cozidos com arroz basmati aromático típico da culinária indiana.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '21',
    name: 'Biryani de Carneiro',
    image: food_21,
    price: { H: 15, F: 20 },
    description:
      'Experimente nosso Biryani de Carneiro, um prato de arroz tradicional da culinária indiana rico e saboroso feito com carneiro macio e especiarias.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '22',
    name: 'Arroz Frito com Ovo',
    image: food_22,
    price: { H: 15, F: 20 },
    description:
      'Nosso Arroz Frito com Ovo é um prato simples e delicioso, feito com ovos mexidos e arroz temperado.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '23',
    name: 'Arroz com Limão',
    image: food_23,
    price: { H: 15, F: 20 },
    description:
      'Aproveite o sabor ácido do nosso Arroz com Limão, feito com suco de limão fresco, cúrcuma e especiarias aromáticas.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '24',
    name: 'Arroz Frito com Camarão',
    image: food_24,
    price: { H: 15, F: 20 },
    description:
      'Nosso Arroz Frito com Camarão é um prato saboroso, com camarões suculentos fritos com arroz temperado.',
    category: 'Arroz',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },

  // Deserts Products
  {
    _id: '25',
    name: 'Bolo de Chocolate Clássico com Ganache Rica',
    image: food_25,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nosso Bolo de Chocolate Clássico, feito com camadas de bolo de chocolate úmido e ganache rica.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '26',
    name: 'Cheesecake Cremoso com Cobertura de Frutas Vermelhas Frescas',
    image: food_26,
    price: { H: 15, F: 20 },
    description:
      'Saboreie nosso Cheesecake Cremoso, coberto com uma mistura de frutas vermelhas frescas para um toque delicioso.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '27',
    name: 'Torta Quente de Maçã com Crosta Flaky',
    image: food_27,
    price: { H: 15, F: 20 },
    description:
      'Aproveite nossa Torta Quente de Maçã, recheada com maçãs temperadas e envolta em uma crosta amanteigada e crocante.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '28',
    name: 'Brownie de Chocolate Decadente com Centro de Fudge',
    image: food_28,
    price: { H: 15, F: 20 },
    description:
      'Mime-se com nosso Brownie de Chocolate Decadente, com um centro fudgy e rico.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '29',
    name: 'Torta de Limão Leve com Crosta Manteigada',
    image: food_29,
    price: { H: 15, F: 20 },
    description:
      'Desfrute da nossa Torta de Limão Leve, com um recheio de limão ácido em uma crosta crocante e amanteigada.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '30',
    name: 'Mousse de Chocolate Aveludada com Creme Chantilly',
    image: food_30,
    price: { H: 15, F: 20 },
    description:
      'Experimente a textura suave da nossa Mousse de Chocolate Aveludada, coberta com creme chantilly fresco.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '31',
    name: 'Panna Cotta Cremosa com Calda de Frutas Vermelhas',
    image: food_31,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nossa Panna Cotta Cremosa, servida com uma compota de frutas vermelhas deliciosa.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '32',
    name: 'Tiramisu Tradicional com Creme de Mascarpone',
    image: food_32,
    price: { H: 15, F: 20 },
    description:
      'Saboreie os sabores da Itália com nosso Tiramisu Tradicional, recheado com um rico creme de mascarpone.',
    category: 'Sobremesas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  // Drinks Products
  {
    _id: '33',
    name: 'Limonada Gelada com Menta Fresca',
    image: food_33,
    price: { H: 15, F: 20 },
    description:
      'Aproveite nossa Limonada Gelada, infusionada com menta fresca para uma reviravolta refrescante em uma bebida clássica.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '34',
    name: 'Milkshake de Baunilha Suave',
    image: food_34,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nosso Milkshake de Baunilha Suave, feito com creme de sorvete de baunilha e leite fresco.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '35',
    name: 'Suco de Laranja Ácido',
    image: food_35,
    price: { H: 15, F: 20 },
    description:
      'Saboreie o gosto do nosso Suco de Laranja Ácido, espremido na hora de laranjas maduras.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '36',
    name: 'Leite de Chocolate Rico',
    image: food_36,
    price: { H: 15, F: 20 },
    description:
      'Mime-se com nosso Leite de Chocolate Rico, uma mistura perfeita de cacau e leite para um prazer cremoso.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: '37',
    name: 'Smoothie de Manga Frutado',
    image: food_37,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nosso Smoothie de Manga Frutado, feito com mangas frescas e iogurte para um lanche saudável.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '38',
    name: 'Chá Gelado Refrescante',
    image: food_38,
    price: { H: 15, F: 20 },
    description:
      'Experimente o sabor refrescante e gelado do nosso Chá Gelado, preparado com um toque de limão.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '39',
    name: 'Café com leite cremoso',
    image: food_39,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nosso Café com leite cremoso, feito com espresso rico e leite vaporizado.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '40',
    name: 'Refrigerante Ginger Ale Apimentado',
    image: food_40,
    price: { H: 15, F: 20 },
    description:
      'Saboreie o gosto picante e refrescante do nosso Ginger Ale Apimentado, perfeito para qualquer momento do dia.',
    category: 'Bebidas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },

  // Fruits Products
  {
    _id: '41',
    name: 'Morango Fresco',
    image: food_41,
    price: { H: 15, F: 20 },
    description:
      'Desfrute do sabor doce e suculento dos nossos Morangos Frescos, colhidos à mão para o seu prazer.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '42',
    name: 'Maçãs Verdes Crocantes',
    image: food_42,
    price: { H: 15, F: 20 },
    description:
      'Saboreie o gosto ácido e refrescante das nossas Maçãs Verdes Crocantes, perfeitas para um lanche.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '43',
    name: 'Pedaços de Abacaxi Tropical',
    image: food_43,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nossos Pedaços de Abacaxi Tropical, cheios de sabores doces e ácidos.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '44',
    name: 'Fatias de Melancia Suculentas',
    image: food_44,
    price: { H: 15, F: 20 },
    description:
      'Refresque-se com nossas Fatias de Melancia Suculentas, perfeitas para um lanche refrescante no verão.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '45',
    name: 'Uvas Vermelhas Doces',
    image: food_45,
    price: { H: 15, F: 20 },
    description:
      'Delicie-se com nossas Uvas Vermelhas Doces, cheias de doçura e sabor natural.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '46',
    name: 'Laranjas Recém Descascadas',
    image: food_46,
    price: { H: 15, F: 20 },
    description:
      'Aproveite a conveniência das nossas Laranjas Recém Descascadas, prontas para comer e cheias de suculência.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '47',
    name: 'Cacho de Banana Madura',
    image: food_47,
    price: { H: 15, F: 20 },
    description:
      'Nosso Cacho de Banana Madura é perfeito para um lanche rápido ou uma adição saudável às suas refeições.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: '48',
    name: 'Fatias de Manga Exótica',
    image: food_48,
    price: { H: 15, F: 20 },
    description:
      'Desfrute do sabor rico e suculento das nossas Fatias de Manga Exótica, uma deliciosa iguaria tropical.',
    category: 'Frutas',
    sizes: ['H', 'F'],
    date: 1716634345448,
    popular: false,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Saiba Mais',
    links: [
      'Sobre Nós',
      'Comidas Frescas',
      'Comidas Rápidas',
      'Ofertas Quentes',
      'Comidas Populares',
      'FAQ',
    ],
  },
  {
    title: 'Nossa Comunidade',
    links: [
      'Termos e Condições',
      'Ofertas Especiais',
      'Avaliações de Clientes',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Entre em Contato',
  links: [
    { label: 'Número de Contato', value: '123-456-7890' },
    { label: 'Endereço de E-mail', value: 'info@Tandoori.com' },
  ],
};
