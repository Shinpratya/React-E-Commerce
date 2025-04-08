import { css } from "@emotion/css";

function HaederCart() {
  return (
    <>
      <div
        className={css`
          display: grid;
          grid-template-columns: 4fr 1fr 1.5fr 1fr 1fr;
          gap: 10px;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          margin-bottom: 20px;
          text-align: center;
        `}
      >
        <div
          className={css`
            display: flex;
            width: 100%;
          `}
        >
          <p
            className={css`
              margin-left: 20px;
            `}
          >
            Product
          </p>
        </div>

        <div>
          <p
            className={css`
              margin-left: 20px;
            `}
          >
            Unit Price
          </p>
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
            Quantity
          </p>
        </div>

        <div>
          <p
            className={css`
              margin-left: 20px;
            `}
          >
            Total Price
          </p>
        </div>

        <div>
          <p
            className={css`
              margin-left: 20px;
            `}
          >
            Actions
          </p>
        </div>
      </div>
    </>
  );
}

export default HaederCart;
