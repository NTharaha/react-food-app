import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const WorkInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa odio cupiditate, eum cum a maiores similique voluptate laboriosam.",
    },
    {
      image: ChooseMeals,
      title: "Pick Meals",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa odio cupiditate, eum cum a maiores similique voluptate laboriosam.",
    },
    {
      image: DeliveryMeals,
      title: "Pick Meals",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa odio cupiditate, eum cum a maiores similique voluptate laboriosam.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">How It Work</p>
        <h1 className="primary-heading">How It Work</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa odio
          cupiditate, eum cum a maiores similique voluptate laboriosam.
        </p>
      </div>
      <div className="work-section-bottom">
        {WorkInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
