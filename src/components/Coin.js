import React from 'react';

const Coin = (props) => {
    const {name,image,symbol,price,marketCap,price_change} = props;
    return (
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{price_change}</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;