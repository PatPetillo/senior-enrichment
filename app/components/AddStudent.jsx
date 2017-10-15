import React from 'react';

const backgroundImg = (item) => ({backgroundImage : `url(./src/assets/${item}.gif)`});

export default ({item}) => {
	return (<div className="item-img" style={backgroundImg(item)}></div>)
}