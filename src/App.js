import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {SpinnerRoundFilled} from 'spinners-react';

const StyledImage = styled.img`
    display: table;
    margin: 0 auto;
    width: 720px;
    max-width: 100%;
`;

const StyledSpinner = styled(SpinnerRoundFilled)`
  margin-top: 100px;
  color: #B744B8 !important;
`;

const Images = [
    "https://i.imgur.com/A3Omqfy.png",

    "https://i.imgur.com/pRWksfC.png",
    "https://i.imgur.com/NnCtoj3.png",
    "https://i.imgur.com/x0gz6wi.png",
    "https://i.imgur.com/R9HdZhc.png",

    "https://i.imgur.com/jqDPlzI.png",
    "https://i.imgur.com/MI2KLQ8.png"
];


const loadImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(path);
        img.src = path;
    });

const App = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(Images.map(loadImage))
            .then(
                () => setLoading(false),
                err => console.error(err)
            )
    }, []);

    if (isLoading) {
        return <StyledSpinner size={200}/>
    }
    return <div onClick={() => setImageIndex(imageIndex + 1)}>
        <StyledImage
            alt="image"
            src={Images[imageIndex % Images.length]}
        />
    </div>
};

export default App;
