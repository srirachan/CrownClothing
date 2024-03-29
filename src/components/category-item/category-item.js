import "./category-item.scss";

const CategoryItem = () => {
  const category = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div className='categories-container'>
      {category.map((eachItem) => {
        const { id, title, imageUrl } = eachItem;
        return (
          <div key={id} className='category-container'>
            <div
              className='background-image'
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>SHOP NOW</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItem;
