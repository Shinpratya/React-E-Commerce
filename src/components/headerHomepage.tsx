import { css } from "@emotion/css";
import { Select, Typography } from "antd";

const HeaderHomepage = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-item: center;
        margin: 10px 20px;
      `}
    >
      <Typography.Title level={4}>Product</Typography.Title>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 0 20px 10px;
        `}
      >
        sort by :
        <Select
          className={css`
            min-width: 150px;
            margin-left: 10px;
          `}
          defaultValue={"default"}
          options={[
            {
              label: "Relevant",
              value: "default",
            },
            {
              label: "Less to more",
              value: "ASC ",
            },
            {
              label: "More to Less",
              value: "DESC",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HeaderHomepage;
