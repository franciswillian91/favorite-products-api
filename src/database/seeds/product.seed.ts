import 'reflect-metadata'
import { dbInstance } from '../../config/database'
import { v4 as uuid } from 'uuid'
import { Products } from '../entities/product.entity'


const seed = async () =>{
    try {
        if(!dbInstance.isInitialized){
            await dbInstance.initialize()
        }

        const repository = dbInstance.getRepository(Products)
        const data = [
            {
                "id": uuid(),
                "product_id": 1,
                "product_title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "product_price": 109.95,
                "product_ref_image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "product_rating": 3.9,
                "product_rating_count": 120
            },
            {
                "id": uuid(),
                "product_id": 2,
                "product_title": "Mens Casual Premium Slim Fit T-Shirts ",
                "product_price": 22.3,
                "product_ref_image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "product_rating": 4.1,
                "product_rating_count": 259
            },
            {
                "id": uuid(),
                "product_id": 3,
                "product_title": "Mens Cotton Jacket",
                "product_price": 55.99,
                "product_ref_image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "product_rating": 4.7,
                "product_rating_count": 500
            },
            {
                "id": uuid(),
                "product_id": 4,
                "product_title": "Mens Casual Slim Fit",
                "product_price": 15.99,
                "product_ref_image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "product_rating": 2.1,
                "product_rating_count": 430
            },
            {
                "id": uuid(),
                "product_id": 5,
                "product_title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                "product_price": 695,
                "product_ref_image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "product_rating": 4.6,
                "product_rating_count": 400
            },
            {
                "id": uuid(),
                "product_id": 6,
                "product_title": "Solproduct_id Gold Petite Micropave ",
                "product_price": 168,
                "product_ref_image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                "product_rating": 3.9,
                "product_rating_count": 70
            },
            {
                "id": uuid(),
                "product_id": 7,
                "product_title": "White Gold Plated Princess",
                "product_price": 9.99,
                "product_ref_image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                "product_rating": 3,
                "product_rating_count": 400
            },
            {
                "id": uuid(),
                "product_id": 8,
                "product_title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "product_price": 10.99,
                "product_ref_image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                "product_rating": 1.9,
                "product_rating_count": 100
            },
            {
                "id": uuid(),
                "product_id": 9,
                "product_title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                "product_price": 64,
                "product_ref_image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                "product_rating": 3.3,
                "product_rating_count": 203
            },
            {
                "id": uuid(),
                "product_id": 10,
                "product_title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                "product_price": 109,
                "product_ref_image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                "product_rating": 2.9,
                "product_rating_count": 470
            },
            {
                "id": uuid(),
                "product_id": 11,
                "product_title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                "product_price": 109,
                "product_ref_image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                "product_rating": 4.8,
                "product_rating_count": 319
            },
            {
                "id": uuid(),
                "product_id": 12,
                "product_title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                "product_price": 114,
                "product_ref_image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                "product_rating": 4.8,
                "product_rating_count": 400
            },
            {
                "id": uuid(),
                "product_id": 13,
                "product_title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                "product_price": 599,
                "product_ref_image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                "product_rating": 2.9,
                "product_rating_count": 250
            },
            {
                "id": uuid(),
                "product_id": 14,
                "product_title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawproduct_ide Screen QLED ",
                "product_price": 999.99,
                "product_ref_image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
                "product_rating": 2.2,
                "product_rating_count": 140
            },
            {
                "id": uuid(),
                "product_id": 15,
                "product_title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                "product_price": 56.99,
                "product_ref_image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                "product_rating": 2.6,
                "product_rating_count": 235
            },
            {
                "id": uuid(),
                "product_id": 16,
                "product_title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                "product_price": 29.95,
                "product_ref_image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                "product_rating": 2.9,
                "product_rating_count": 340
            },
            {
                "id": uuid(),
                "product_id": 17,
                "product_title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                "product_price": 39.99,
                "product_ref_image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                "product_rating": 3.8,
                "product_rating_count": 679
            },
            {
                "id": uuid(),
                "product_id": 18,
                "product_title": "MBJ Women's Solproduct_id Short Sleeve Boat Neck V ",
                "product_price": 9.85,
                "product_ref_image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                "product_rating": 4.7,
                "product_rating_count": 130
            },
            {
                "id": uuid(),
                "product_id": 19,
                "product_title": "Opna Women's Short Sleeve Moisture",
                "product_price": 7.95,
                "product_ref_image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                "product_rating": 4.5,
                "product_rating_count": 146
            },
            {
                "id": uuid(),
                "product_id": 20,
                "product_title": "DANVOUY Womens T Shirt Casual Cotton Short",
                "product_price": 12.99,
                "product_ref_image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                "product_rating": 3.6,
                "product_rating_count": 145
            }
        ]

        await repository.insert(data)

    } catch (error) {
        console.log('Error while seeding: ',error)
    }
}

seed()