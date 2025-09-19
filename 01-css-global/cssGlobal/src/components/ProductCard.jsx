import Button from "./Button";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";


const products = [
    {
        img : img1,
        title: "Red Velvet",
        price: "100,00",
        rating: "5 estrelas"
    },
    {
        img : img2,
        title: "Kinder bueno",
        price: "100,00",
        rating: "5 estrelas"
    },
    {
        img : img3,
        title: "Dois Amores",
        price: "100,00",
        rating: "5 estrelas"
    },
    {
        img : img4,
        title: "Churros",
        price: "100,00",
        rating: "5 estrelas"
    },
    {
        img : img5,
        title: "Abacaxi com nozes",
        price: "100,00",
        rating: "5 estrelas"
    },
    {
        img : img6,
        title: "Floresta Negra",
        price: "100,00",
        rating: "5 estrelas"
    }
]

const ProductCard =  () => {
    return (
        <section>
            <div className="container-grid">
                {products.map((product, index) => {
                    return(
                        <div className="card" key={index}>
                            <img src={product.img} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <p>{product.rating}</p>
                            <Button/>
                        </div>
                    )     
                })}
                
            </div>
            
        </section>
    )
}

export default ProductCard;