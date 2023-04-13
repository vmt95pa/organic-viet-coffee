import React, { useState } from "react";
import { Menu } from "antd";

import navigatorData from "../../../data/navigator.json";
import Link from "next/link";
import SocialIcons from "../../other/SocialIcons";

function MobileNavigator() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"

        selectedKeys={[current]}
        mode="inline"
      >
        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.HOME.href}>
            <a
            >
              {navigatorData.HOME.title}
            </a>
          </Link>
        </Menu.Item>
        <SubMenu  key="shop" title={navigatorData.SHOP.title}>
          {navigatorData.SHOP.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="alipay">
          <Link  href={process.env.PUBLIC_URL + navigatorData.BLOG.href}>
            <a
            >
              {navigatorData.BLOG.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.SALE.href}>
            <a
            >
              {navigatorData.SALE.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.CONTACT.href}>
            <a
            >
              {navigatorData.CONTACT.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.INTRO.href}>
            <a
            >
              {navigatorData.INTRO.title}
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default React.memo(MobileNavigator);
