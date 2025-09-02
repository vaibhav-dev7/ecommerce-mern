import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows businesses and
          customers to buy and sell products or services over the internet. It
          provides features like product listings, secure payments, and order
          tracking, making shopping convenient and accessible from anywhere.
        </p>
        <p>
          It makes shopping easier with product catalogs, secure payments, and
          doorstep delivery. Customers can explore a wide range of products
          anytime, anywhere, while businesses can reach a global audience and
          grow faster.
        </p>
      </div>
    </div>
  );
}
