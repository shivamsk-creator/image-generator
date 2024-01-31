"use client";
import { Drawer, Flex, Menu, MenuProps, Space } from "antd";
import Title from "antd/es/typography/Title";
import { Header } from "antd/es/layout/layout";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import logo from "../../assets/images/imagine-text.png";

const NavigationBar = () => {
  return (
    <>
      <Flex align="center" justify="center" style={{ padding: "10px 15px" }}>
        <img src={logo.src} width={70} alt="" />
        <Title
          style={{
            marginBottom: "0px",
            fontFamily: "Pacifico",
            color: "#2E4049",
            fontWeight: "400",
            fontSize: "35px",
            textAlign: "center",
          }}
          level={3}
        >
          Imagin<span style={{ color: "#5942ff" }}>Text</span>
        </Title>
      </Flex>
    </>
  );
};

export default NavigationBar;
