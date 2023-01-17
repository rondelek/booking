type Props = {
  category: Category;
};

export default function Card2({ category }: Props) {
  return (
    <div className="relative w-88 h-[28rem] my-4 card overflow-hidden">
      <img
        className="-z-10 w-full h-auto overflow-hidden hover:scale-110 duration-200"
        src={category.image}
        alt="image description"
      />

      <div className="absolute top-4 left-4 py-1 px-3 rounded-full text-white bg-main-orange bg-opacity-80 z-50">
        {category.name}
      </div>
    </div>
  );
}
