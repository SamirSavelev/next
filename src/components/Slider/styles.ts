import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000; ;
`;

const List = styled.li`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  & > .slide {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Slide = styled.ul`
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 320px;
  height: 488.89px;
  float: left;
  &:not(:last-child) {
    margin-right: 1em;
  }
  scroll-snap-align: end;
  scroll-snap-stop: normal;
`;

export const SliderStyles = { Container, List, Slide };
