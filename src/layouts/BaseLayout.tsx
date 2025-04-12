// import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import { Layout } from "antd";
import { css } from "@emotion/css";

function BaseLayout() {
  return (
    <div>
      <Layout>
        <Nav />
      </Layout>

      <Layout
        className={css`
          min-height: calc(100vh - 4rem);
        `}
      >
        <Layout.Sider>
          <div>ssssssssss</div>
          <div>wwwww</div>
          <div>qqqqqq</div>
        </Layout.Sider>

        <Layout.Content
          className={css`
            padding-top: 30px;
          `}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default BaseLayout;
