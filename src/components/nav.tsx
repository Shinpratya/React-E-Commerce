import { css } from "@emotion/css";
import { Avatar, Badge, Button, Divider, Input, Popover } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100% !impotant;
          height: 4rem;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          padding: 0 3rem;
          z-index: 99!impotant;
        `}
      >
        <h2
          onClick={() => navigate("/")}
          className={css`
            :hover {
              color: rgb(109, 111, 243);
              cursor: pointer;
            }
          `}
        >
          E-commerce
        </h2>
        <Input.Search
          placeholder="Search for product"
          size="large"
          id="input-search"
          className={css`
            width: 35rem;
          `}
        />
        <div
          className={css`
            width: 15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // background: red;
          `}
        >
          <Badge count={0}>
            <ShoppingCartOutlined
              className={css`
                width: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                // background: red;
                cursor: pointer;
                :hover {
                  color: #0004ff;
                }
              `}
              style={{ fontSize: "2rem" }}
              onClick={() => navigate("/cart")}
              id="cart"
            />
          </Badge>
          {/* <Popover
            placement="bottomRight"
            title={"Name"}
            content={
              <div>
                <Divider />
                <a>Sign Out</a>
              </div>
            }
            // arrow={mergedArrow}
            trigger="click"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size={34}
              icon={<UserOutlined />}
            />
          </Popover> */}
          <div
            className={css`
              // width: 8rem;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <Button type="primary" href="/login">
              Sign in
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
