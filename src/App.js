import React from 'react';

function Food({foodName,picture}){
return( 
  <div> 
  <h3>I like {foodName}</h3>
  <img src={picture} alt=""/>
</div>);

}
const foodILike = [
  {
    name: "kimchi",
    image:"https://www.thespruceeats.com/thmb/gqJ0irQmKyBlRujeZh_DtUg79o0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg"},
  {
    name: "yeopdduck",
    image:"https://cdn.allets.com/550/2019/08/26/550_523325_1566808674.webp"},
  {
    name: "donkatsu",
    image:"http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg"},
  {
    name: "Ramen",
    image:"https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg"}
                  ];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food foodName={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
