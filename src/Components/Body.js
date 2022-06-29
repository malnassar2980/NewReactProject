import React from 'react'

function Body() {

    const products = [
       {
           id:1 ,
           productName: 'Camera' ,
           price: 50,
           backgroundImage:'https://github.com/malnassar2980/hosted-assets/blob/main/img1.PNG?raw=true'

       },
       {
        id:2 ,
        productName: 'Apple watch' ,
        price: 80,
        backgroundImage: 'https://github.com/malnassar2980/hosted-assets/blob/main/img2.PNG?raw=true'
       },
       {
        id:3 ,
        productName: 'Air pod' ,
        price: 30,
        backgroundImage: 'https://github.com/malnassar2980/hosted-assets/blob/main/img3.PNG?raw=true'

       },
       {
        id:4 ,
        productName: 'ipad' ,
        price: 100,
        backgroundImage:'https://github.com/malnassar2980/hosted-assets/blob/main/img5.PNG?raw=true'

       }
    ]
const productList = products.map(product => 
   
   
  	<div key={product.id} className="images-section">
      <div className="product-box">
      	<div className="image-wrapper">
      		<div className="image-box" style={{ backgroundImage:`url(${product.backgroundImage})`}}>
              <div className="add-to-cart"> 
              <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
              </div>
            </div>
      		<div className="price-box">
                <h1>{product.productName}</h1>
                <h5>SR {product.price}</h5>
        	</div>
        </div>
      </div>
      </div>
     
    )
    return (
        <div className='main'>
            {
                productList
            }
        </div>
    )
}

export default Body
