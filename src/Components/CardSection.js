import React from 'react'
import Card from './Card'

export default function CardSection({data, addToCart, removeFromCart}) {
    // const data = [
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Fancy Product',
    //         presentPrice : '$40.00 - $80.00',
    //         sale : false,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Special Item',
    //         oldPrice : '$20.00',
    //         presentPrice : '$18.00',
    //         sale : true,
    //         rating : 5,
    //         cart : false
            
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Sale Item',
    //         oldPrice : '$50.00',
    //         presentPrice : '$25.00',
    //         sale : true,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Popular Item',
    //         presentPrice : '$40.00',
    //         sale : false,
    //         rating : 5,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Sale Item',
    //         oldPrice : '$50.00',
    //         presentPrice : '$25.00',
    //         sale : true,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Fancy Product',
    //         presentPrice : '$120.00 - $280.00',
    //         sale : false,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Special Item',
    //         oldPrice : '$20.00',
    //         presentPrice : '$18.00',
    //         sale : true,
    //         cart : false
    //     },
    //     {
    //         url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    //         name : 'Popular Item',
    //         presentPrice : '$40.00',
    //         sale : false,
    //         rating : 5,
    //         cart : false
    //     }
    // ]
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
