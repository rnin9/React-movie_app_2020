import React from 'react';
import PropTypes from "prop-types";

function Food({foodName,picture,rating}){
return( 
  <div> 
  <h3>I like {foodName}</h3>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={foodName}/>
</div>);
}

Food.propTypes ={
  foodName:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}
const foodILike = [
  { 
    id :1,
    name: "kimchi",
    image:"https://www.thespruceeats.com/thmb/gqJ0irQmKyBlRujeZh_DtUg79o0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg",
    rating: 5},
  {
    id :2,
    name: "yeopdduck",
    image:"https://cdn.allets.com/550/2019/08/26/550_523325_1566808674.webp",
    rating: 4.8},
  {
    id :3,
    name: "donkatsu",
    image:"http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg",
    rating: 4.7},
  {
    id :4,
    name: "Ramen",
    image:"https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating: 3}
                  ];

function App() {
  return (
    <div>
      {foodILike.map(current=> <Food key={current.id} foodName={current.name} picture={current.image} rating ={current.rating}/>)}
    </div>
  );
}

export default App;
