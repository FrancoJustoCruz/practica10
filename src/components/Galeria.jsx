import React, { useState } from 'react';
import PrevIcon from '../components/PrevIcon';
import NextIcon from '../components/NextIcon';

import imgProduct1 from '../assets/images/image-product-1.jpg';
import imgProduct2 from '../assets/images/image-product-2.jpg';
import imgProduct3 from '../assets/images/image-product-3.jpg';
import imgProduct4 from '../assets/images/image-product-4.jpg';

import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
const mainImages = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const Galeria = () => {
    const [index, setIndex] = useState(0);

    const handleClickThumbnail = (thumbIndex) => {
        setIndex(thumbIndex);
    };

    const handleClickNext = () => {
        if (index === mainImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const handleClickPrev = () => {
        if (index === 0) {
            setIndex(mainImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <section className="grid md:grid-cols-4 md:gap-4 md:mx-5">
            <div className="relative col-span-4">
                <div className="flex items-center justify-center aspect-w-16 aspect-h-13 md:aspect-w-16 md:aspect-h-18">
                    <img
                        src={mainImages[index]}
                        className="object-cover w-full h-full md:rounded-md max-w-full xl:max-w-[80%] 2xl:max-w-[60%]"
                        alt={`Product ${index + 1}`}
                    />
                </div>

                <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden">
                    <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>

            {thumbnails.map((thumbnail, idx) => (
                <img
                    key={idx}
                    src={thumbnail}
                    alt={`Thumbnail ${idx + 1}`}
                    className="cursor-pointer md:rounded-md hidden md:block xl:max-w-[80%] 2xl:max-w-[60%]"
                    onClick={() => handleClickThumbnail(idx)}
                />
            ))}
        </section>
    );
};

export default Galeria;