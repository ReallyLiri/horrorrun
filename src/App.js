import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {SpinnerRoundFilled} from 'spinners-react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
    width: 720px;
    max-width: 100%;
    align-self: center;
`;

const StyledSpinner = styled(SpinnerRoundFilled)`
  margin-top: 100px;
  color: #EDFF7A !important;
`;

const Images = [
    "https://i.imgur.com/OlQfbzX.png",
    "https://i.imgur.com/PChjwIy.png",
    "https://i.imgur.com/973dfLT.png",
    "https://i.imgur.com/N7UqFXI.png",
    "https://i.imgur.com/n0d51EH.png",
    "https://i.imgur.com/jAoLOpI.png",
    "https://i.imgur.com/WFxMh9L.png",
    "https://i.imgur.com/QIJT0KY.png",
    "https://i.imgur.com/u3ds2I6.png",
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
    return <Wrapper onClick={() => setImageIndex(imageIndex + 1)}>
        <StyledImage
            alt="image"
            src={Images[imageIndex % Images.length]}
        />
    </Wrapper>
};

export default App;
