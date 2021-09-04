import React from 'react'
import Card from './Card'

export default function CardSection({data, addToCart, removeFromCart}) {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((item,index) => {
                        return(<Card item = {item} key = {index} addItem = {addToCart} uniValue = {index} removeCart = {removeFromCart}/>)
                    })}
                </div>
            </div>
        </section>
    )
}
