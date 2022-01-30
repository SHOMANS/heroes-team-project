import styled from "styled-components";

export const SwiperWrapper = styled("div")`
  background: ${(props) => props.theme.background.secondary};
`;
export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 1rem 0;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;
export const Featured = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 20px 0px;
`;
export const Categ = styled.div`
  display: flex;
  align-items: left;
  align-self: left;
  justify-content: left;
  /* padding: 20px 0px; */
  padding: 50px 0 15px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
`;

export const CategoryImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;

  padding: 1rem 0.5rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CategoryoneImage = styled.div`
  height: 250px;
  width: 100%;
  padding: 3rem;
  background: ${(props) => props.theme.background.paper};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardsSection = styled.div`
  background: ${(props) => props.theme.background.secondary};
  width: 100%;
`;

export const SliderDatiles = styled.div`
  width: 40%;
  text-align: left;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SliderDatilesm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const SliderImage = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
