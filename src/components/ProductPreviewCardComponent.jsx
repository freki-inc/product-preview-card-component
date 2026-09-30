import imageMobile from "../assets/images/image-product-mobile.jpg";
import imageDesktop from "../assets/images/image-product-desktop.jpg";
import iconCart from "../assets/images/icon-cart.svg";

export const ProductPreviewCardComponent = () => {
    return (
        <div className="card-wrapper">
            <div className="card-top">
                <picture>
                    <source 
                        media="(min-width: 768px)"
                        srcSet={imageDesktop}
                    />
                    <img
                        className="image-card"
                        src={imageMobile}
                        alt="perfume"
                    />
                </picture>
            </div>
            <div className="card-bottom">
                <div className="text-wrapper">
                    <p className="title">Perfume</p>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p className="description"> A floral, solar and voluptuous interpretation 
                        composed by Olivier Polge, Perfumer-Creator 
                        for the House of CHANEL.
                    </p>
                </div>
                <div className="price-wrapper">
                    <p className="price">$149.99</p>
                    <p className="old-price">$169.99</p>
                </div>
                <button>
                    <img className="btn-icon" src={iconCart} alt="shopping cart" />
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    )
}
