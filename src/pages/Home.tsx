import CartItem from "../components/cartItem";
import HeaderHomepage from "../components/headerHomepage";
import { useSelector } from "react-redux";
import { productSelector, getProducts, useAppDispatch } from "../stores";
import { useEffect } from "react";

const Home = () => {
  const { data, loading } = useSelector(productSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <>
      <HeaderHomepage />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {data.map((v) => {
          return <CartItem product={v} />;
        })}
      </div>
    </>
  );
};

export default Home;
