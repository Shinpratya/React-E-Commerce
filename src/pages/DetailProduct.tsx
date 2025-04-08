import { css } from "@emotion/css";
import {
  Button,
  Card,
  Carousel,
  Col,
  Input,
  Rate,
  Row,
  Typography,
} from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

const DetailProduct = () => {
  return (
    <>
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
          gap: 0;
          padding: 10px;
          margin-bottom: 20px;
          text-align: center;
          width: 90%;
          margin: auto;
          min-height: 70vh;
        `}
      >
        <div
          className={css`
            // background: red;
            width: 100%;
            // border-right: black 1px solid;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          `}
        >
          <Carousel
            className={css`
              width: 600px;
              height: 70vh;
              // background: #364d79;

              .slick-prev,
              .slick-next {
                font-size: 52px !important;
                background: black !important;
                color: white !important;
                text-align: center !important;
                padding: 15px !important;
              }
              .slick-prev::after {
                top: 8px !important;
                left: 10px !important;
              }

              .slick-next::after {
                top: 8px !important;
                left: 7px !important;
              }

              .slick-prev:hover,
              .slick-next:hover {
                color: white !important; /* เปลี่ยนสีเมื่อนำเมาส์ไปวาง */
              }
            `}
            arrows
            infinite={false}

            // nextArrow={<RightCircleOutlined />}
            // prevArrow={<LeftCircleOutlined />}
          >
            <div
              className={css`
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                width: 100%;
                height: 70vh;
              `}
            >
              <img
                className={css`
                  width: 100%;
                  max-height: 400px;
                  object-fit: contain;
                  height: 70vh;
                `}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="img-product"
              />
            </div>
          </Carousel>
        </div>

        <Col
          className={css`
            // background: green;
            // display: flex;
            // flex-direction: column;
            // justify-content: start;
            // align-items: start;
            text-align: start;
            padding-left: 30px;
            width: 80%;
          `}
        >
          <Typography.Title id="title" level={3}>
            {product?.title ?? ""}
          </Typography.Title>
          <Typography.Paragraph id="description">
            {product?.description ?? ""}
          </Typography.Paragraph>
          <Typography.Paragraph id="price" strong>
            Price : {product?.price ?? ""}
          </Typography.Paragraph>
          <Row
            className={css`
              text-align: center;
              margin-top: 30px;
            `}
            justify={"start"}
            align={"middle"}
          >
            <Typography.Paragraph strong>Quantity :</Typography.Paragraph>{" "}
            <Input
              type="number"
              id="quantity"
              min="1"
              max="1000"
              defaultValue={1}
              style={{ width: "75%", marginLeft: "10px" }}
            ></Input>
          </Row>

          <Row
            className={css`
              margin-top: 30px;
            `}
          >
            <Rate disabled defaultValue={product?.rating?.rate ?? 0} />
          </Row>

          <Button
            className={css`
              margin-top: 35px;
            `}
            type="primary"
            id="add-Cart"
          >
            Add to Cart
          </Button>
        </Col>
      </div>
    </>
  );
};

export default DetailProduct;
