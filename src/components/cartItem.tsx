import { css } from "@emotion/css";
import { Card, Typography } from "antd";
import { ProductType } from "../types";
import { useNavigate } from "react-router-dom";

type CartItemProps = {
  product: ProductType;
};

const CartItem = ({ product }: CartItemProps) => {
  let navigate = useNavigate();

  return (
    <Card
      hoverable
      style={{ width: 250, border: "none" }}
      cover={
        <img
          className={css`
            width: 200px;
            height: 250px;
            object-fit: contain;
          `}
          alt="example"
          src={product?.image ?? ""}
        />
      }
      onClick={() => navigate(`/detail/${product?.id}`)}
    >
      <Typography.Paragraph
        onClick={() => navigate(`/detail/${product?.id}`)}
        style={{ fontSize: "20px" }}
        ellipsis={{ rows: 1 }}
        className={css`
          color: blue;
        `}
        id="title-product"
      >
        {product?.title ?? ""}
      </Typography.Paragraph>

      <Typography.Paragraph ellipsis={{ rows: 3 }}>
        {product?.description ?? ""}
      </Typography.Paragraph>

      <Typography.Paragraph strong>
        Price : {product?.price ?? ""}
      </Typography.Paragraph>
    </Card>
  );
};

export default CartItem;
