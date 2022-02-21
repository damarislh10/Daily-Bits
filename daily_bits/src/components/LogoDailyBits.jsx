import React, { Component } from 'react';
import { ContainerImg, Container2Img } from '../styled/StyleLogo';

class LogoDailyBits extends Component {

  redirige() {
    window.location.href = "./Login";
  };

  render() {
    setTimeout(this.redirige, 2000);

    return (
      <div>

        <ContainerImg>
          <Container2Img>
            <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686451/DailyBitsSprint2/Color_white_Container_No_jmyz6b.png" alt="logo" />
          </Container2Img>
        </ContainerImg>
      </div>
    );
  }
}

export default LogoDailyBits;
