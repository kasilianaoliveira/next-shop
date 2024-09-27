import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        
      </Product>
    </HomeContainer>
  );
}

const Button = styled("button",{
  backgroundColor: "$green500",
  color: "white",
  fontSize: "18px",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  outline: "none",
  border: "none",
  transition: "ease 1s",
 '&:hover': {
    backgroundColor: 'Blue',

  },
})