import estilo from "./Mosaic.module.css";

import ItemLook from "./ItemLook/ItemLook";

const looks = [
  {
    id: 1,
    title: 'Look 1',
    description: 'Descrição do Look 1',
    image: "/assets/lookbook1.jpg"
  },
  {
    id: 2,
    title: 'Look 2',
    description: 'Descrição do Look 2',
    image: "/assets/lookbook2.jpg"
  },
  {
    id: 3,
    title: 'Look 3',
    description: 'Descrição do Look 3',
    image: "/assets/lookbook3.jpg"
  },
  {
    id: 4,
    title: 'Look 4',
    description: 'Descrição do Look 4',
    image: "/assets/lookbook4.jpg"
  },
  {
    id: 5,
    title: 'Look 5',
    description: 'Descrição do Look 5',
    image: "/assets/lookbook5.jpg"
  },
  {
    id: 6,
    title: 'Look 6',
    description: 'Descrição do Look 6',
    image: "/assets/lookbook6.jpg"
  },
  {
    id: 7,
    title: 'Look 7',
    description: 'Descrição do Look 7',
    image: "/assets/lookbook7.jpg"
  },
  {
    id: 8,
    title: 'Look 8',
    description: 'Descrição do Look 8',
    image: "/assets/lookbook8.jpg"
  },
  {
    id: 9,
    title: 'Look 9',
    description: 'Descrição do Look 9',
    image: "/assets/lookbook9.jpg"
  },
];
function Mosaic() {
  return (
    <div className={estilo.lookbookContainer}>
      <div className={estilo.lookbookGrid}>
        {looks.map((look) => (
          <ItemLook key={look.id} image={look.image} title={look.title} />
        ))}
      </div>
    </div>
  );
}

export default Mosaic;
