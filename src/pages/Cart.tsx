import { Button, Card, Col, Divider, Row, Typography } from "antd";
import { css } from "@emotion/css";
import HaederCart from "../components/haederCart";
import BodyCart from "../components/bodyCart";

function Cart() {
  return (
    <Col>
      <Card
        title="Order"
        className={css`
          width: 90%;
          margin: auto;
        `}
      >
        <HaederCart />
        <BodyCart />
      </Card>
    </Col>
  );
}

export default Cart;
