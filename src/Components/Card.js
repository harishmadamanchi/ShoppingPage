import React from "react";

export default function Card({item, addItem, uniValue, removeCart}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
          {/* <!-- Sale badge--> */}
          {item.sale ? (<div
          className="badge bg-dark text-white position-absolute"
          style={{top: "0.5rem", right: "0.5rem"}}
        >
          Sale
        </div>): ''}
        
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src= {item.url}
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{item.name}</h5>
            {/* <!-- Product reviews--> */}
            {item.rating ? 
            (<div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div> ): ''}
            
            {/* <!-- Product price--> */}
            {item.oldPrice ? (<span className="text-muted text-decoration-line-through">{item.oldPrice}</span>) : ''}
            {item.presentPrice}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
              {item.cart ? 
                <a className="btn btn-danger mt-auto"  onClick = {() => {removeCart(uniValue)}}>
                    Remove
                </a>
                  :
                <a className="btn btn-outline-dark mt-auto"  onClick = {() => {addItem(uniValue)}}>
                    Add to cart
                </a>
              }
            
          </div>
        </div>
      </div>
    </div>
  );
}
