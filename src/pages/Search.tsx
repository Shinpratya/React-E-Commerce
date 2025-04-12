import CartItem from "../components/cartItem";
import HeaderSearch from "../components/HeaderSearch";
import { useSelector } from "react-redux";
import { productSelector, getProducts, useAppDispatch } from "../stores";
import { useEffect } from "react";
import { Skeleton } from "antd";

const Search = () => {
  const { data, loading } = useSelector(productSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <Skeleton active />;
  }
  return (
    <>
      <HeaderSearch />
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

export default Search;
