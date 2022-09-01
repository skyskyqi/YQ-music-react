import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .nav {
    background-color: #C20C0C;
    height: 30px;
  }
`

export const DiscoverMenu = styled.div`
  display: flex;
  padding: 0 160px;
  position: relative;
  
  .item {
    margin: 0 20px;
    a {
      color: #ffffff;
      display: inline-block;
      height: 26px;
      line-height: 26px;
      padding: 0 8px;

      &:hover, &.active{
        text-decoration: none;
        background-color: #8e1f16;
        border-radius: 20px;
      }
    }
  }

`