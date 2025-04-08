import { DeleteOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Input, Typography } from "antd";

function BodyCart() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div
        className={css`
          width: 100%;
          max-height: 350px;
          // background: red;
          overflow: auto;
        `}
      >
        {arr.map((v) => {
          return (
            <div
              className={css`
                display: grid;
                grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
                gap: 10px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                margin-bottom: 20px;
                text-align: center;
                min-height: 7rem;
              `}
            >
              <div
                className={css`
                  display: flex;
                  justify-content: start;
                  align-items: center;
                `}
              >
                <img
                  className={css`
                    width: 4rem;
                    height: 5rem;
                    margin: 0 20px;
                  `}
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />

                <p
                  className={css`
                    margin-left: 20px;
                  `}
                >
                  Name Product
                </p>
              </div>
              <div
                className={css`
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  padding-left: 10px;
                `}
              >
                <p>$222</p>
              </div>
              <div
                className={css`
                  display: flex;
                  justify-content: start;
                  align-items: center;
                `}
              >
                <Button
                  className={css`
                    width: 2rem;
                    height: 2rem;
                  `}
                >
                  -
                </Button>
                <Input
                  className={css`
                    width: 4rem;
                    height: 2rem;
                  `}
                  type="number"
                  min={1}
                  max={10000}
                  defaultValue={1}
                />
                <Button
                  className={css`
                    width: 2rem;
                    height: 2rem;
                  `}
                >
                  +
                </Button>
              </div>
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <p
                  className={css`
                    margin-left: 20px;
                  `}
                >
                  ราคารวม
                </p>
              </div>
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <DeleteOutlined
                  className={css`
                    cursor: pointer;
                    :hover {
                      color: red;
                    }
                  `}
                  style={{ fontSize: "20px" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          padding: 20px;
        `}
      >
        <div>
          <Typography.Title style={{ margin: 0 }} level={5}>
            Order Total (11 items) : $100
          </Typography.Title>
        </div>
        <div>
          <Button type="primary">Check out</Button>
        </div>
      </div>
    </>
  );
}

export default BodyCart;
