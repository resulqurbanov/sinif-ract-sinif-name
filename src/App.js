
import './App.css';
import Card from './components/index';

function App() {
  const resul=[
    {
      src:"https://assets.adidas.com/images/w_600,f_auto,q_auto/3ce8bd7822d046b0b1d8ae92012ad474_9366/Adilette_22_Slides_Beige_GX6950_01_standard.jpg",
      price:"5454$",
      name:"sepit"
    },
    {
      src:"https://assets.adidas.com/images/w_600,f_auto,q_auto/095f17852a1f4d9d9304af5e01779d4f_faec/adidas_Basketball_Shorts_Green_IA3425_HM5.jpg",
      price:"554$",
      name:"sepewfweit"
    },
    {
      src:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4948095c2bd04bbcb5c2af1601154a02_9366/Stan_Smith_Lux_Shoes_White_HP2201_HM1.jpg",
      price:"45465$",
      name:"ewfd"
    }
  ]
  return (
    <div className="App">
      <Card src="" price="10" name="qapi"/>
      <Card src="" price="10" name="elma"/>
      <Card src="" price="1230" name="Armut"/>


    </div>
  );
}

export default App;
