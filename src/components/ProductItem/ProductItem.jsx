import Button from "../Button/Button";
import "./productItem.css";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={"product " + className}>
            <div className={"img"} />
            <div className={"title"}>{product.title}</div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
                <span>Cost: <b>{product.price}</b></span>
            </div>
            <Button className={"add-btn"} onClick={onAddHandler}>
                Add to basket
            </Button>
        </div>
    );
};

export default ProductItem;