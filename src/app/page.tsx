"use client";

import { Button, Flex, Image } from "antd";
import bg from "../assets/images/bg.jpg";
import mahadev from "../assets/images/mahadev.jpg";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import Head from "next/head";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("the key is", process.env.NEXT_PUBLIC_API_KEY);

  async function query(data: any) {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      console.log("image", result);
      return imageUrl;
    } catch (err) {
      console.log("error=>", err);
    } finally {
      setLoading(false);
    }
  }

  const generateImage = () => {
    query({ inputs: prompt }).then((response: any) => {
      // Use image
      setImage(response);
    });
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="hro-sec">
        <Flex vertical>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Pacifico",
              fontSize: "50px",
              textTransform: "capitalize",
            }}
          >
            Generate image with AI
          </h1>

          <div
            className="input-prompt"
            style={{ display: "flex", margin: "50px 0px" }}
          >
            <textarea
              className="input"
              style={{
                width: "70%",
                margin: "20px auto",
                fontFamily: "Permanent Marker",
                fontSize: "18px",
                padding: "5px",
                height: "63px",
                resize: "none",
              }}
              placeholder="A cat jumping the wall"
              rows={2}
              draggable="false"
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <Button
            type="dashed"
            size={"large"}
            style={{
              background: "transparent",
              color: "white",
              borderWidth: "2px",
              width: "fit-content",
              margin: "auto",
            }}
            onClick={generateImage}
            disabled={!prompt}
          >
            Generate
          </Button>

          {loading && (
            <span className="loader" style={{ margin: "40px auto" }}></span>
          )}

          <Flex
            justify="center"
            gap={10}
            vertical
            align="center"
            style={{ margin: "30px 0px" }}
          >
            {image && (
              <Image width={250} src={image} style={{ margin: "auto" }} />
            )}
            {image && (
              <Button
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size={"large"}
                style={{ margin: "20px 0px" }}
                onClick={downloadImage}
              >
                Download
              </Button>
            )}
          </Flex>
        </Flex>

        <div className="background">
          <img className="bg" src={bg.src} alt="" />
          <img
            className="bg"
            style={{ position: "relative", top: "-4px" }}
            src={bg.src}
            alt=""
          />
          <img
            className="bg"
            style={{ position: "relative", top: "-8px" }}
            src={bg.src}
            alt=""
          />
          <img
            className="bg"
            style={{ position: "relative", top: "-12px" }}
            src={bg.src}
            alt=""
          />
          <img
            className="bg"
            style={{ position: "relative", top: "-16px" }}
            src={bg.src}
            alt=""
          />
        </div>
      </section>
    </>
  );
}
