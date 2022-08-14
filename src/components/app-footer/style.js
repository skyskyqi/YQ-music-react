import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  height: 173px;
  background-color: #f2f2f2;
  border-top: solid 1px rgb(211, 211, 211);
  

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 0;
    

    .footer-content {
      width: 520px;
    }
    
    .footer-img {
      width: 420px;
    }
  }
  
`

export const FooterLeft = styled.div`
  color: #666666;
  .footer_0 {
    height: 24px;
    line-height: 24px;
    .span-contain {
      color: rgb(153, 153, 153);
      
      a {
        width: 48px;
      }

      span {
        margin: 0 4px;
      }
    }
  }

  .footer_1 {
    display: flex;
    justify-content: space-between;
    width: 480px;
    height: 24px;
    line-height: 24px;
  }

  .footer_2 {
    display: flex;
    justify-content: space-between;
    height: 24px;
    line-height: 24px;
    width: 500px;
    
    img {
      width: 14px;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 45px;
    margin-top: 15px;

    .link {
      display: block;
      width: 50px;
      height:45px;

      background-image: url(${require("@/assets/images/sprite_footer_02.png")});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/images/sprite_footer_01.png")});
      background-size: 180px 100px;
      text-indent: -9999px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
      margin-top: 6px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 6px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }
    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
