import styled from "styled-components";

export const HeaderWrapped = styled.div`
  font-size: 14px;
  height: 75px;
  background-color: #242424;
  color: #fff;

  .context {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 157px;
    height: 100%;
    background-position: 0 0;
    padding-right: 20px;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content:"";
          width:28px;
          height:19px;
          background-image: url(${require("@/assets/images/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
    }
  }


`

export const HeaderRight = styled.div`
  display: flex;
`

