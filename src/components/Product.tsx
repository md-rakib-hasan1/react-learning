interface ProductProps {
productName: string
price: number
category:string
}

const Product = ({productName,price,category}:ProductProps) => {
    return (
        <div>
            <h2>Product Name: {productName}</h2>
            <h2>Price: {price}</h2>
            <p>Category:{category}</p>

        </div>
    );
};

export default Product;