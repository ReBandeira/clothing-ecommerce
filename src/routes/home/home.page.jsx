import CategoriesList from '../../components/categories-list/categories-list.component';

const Home = () => {

  const categories = [
    
  {
    id: 1,
    title: "Chapéus e Bonés",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    id: 2,
    title: "Jaquetas",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    id: 3,
    title: "Tênis",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    id: 4,
    title: "feminino",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    id: 5,
    title: "Masculino",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
  }
  ]

  return (
    <div className="home">
        <CategoriesList categories={categories}/>       
    </div>
  );
}

export default Home;
