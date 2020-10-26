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
    "https://i.imgur.com/5Ak43Kv.png",
    "https://i.imgur.com/OlxHFKI.png",
    "https://i.imgur.com/oMkmHXc.png",
    "https://i.imgur.com/Diwyvti.png",
    "https://i.imgur.com/65G0jL2.png",
    "https://i.imgur.com/dkLkTJA.png",
    "https://i.imgur.com/62MkEo0.png",
    "https://i.imgur.com/F7zPBNo.png",
    "https://i.imgur.com/dkLkTJA.png",
    "https://i.imgur.com/PuxIrnp.png",
    "https://i.imgur.com/z71ereI.png",
    "https://i.imgur.com/dkLkTJA.png",
    "https://i.imgur.com/kzDYRsU.png",
    "https://i.imgur.com/oUPxNDm.png",
    "https://i.imgur.com/KGX7Rc1.png",
    "https://i.imgur.com/dkLkTJA.png",
    "https://i.imgur.com/m1EtkuM.png",
    "https://i.imgur.com/NN3wUQ3.png",
    "https://i.imgur.com/yIsx0Ek.png",
    "https://i.imgur.com/hx81RoQ.png",
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
