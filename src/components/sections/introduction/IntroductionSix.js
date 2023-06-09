import React from "react";
import SectionTitle from "../../other/SectionTitle";
import SocialIcons from "../../other/SocialIcons";
import Container from "../../other/Container";
import { Col, Row } from "antd";

const data = [
  {
    name: "Katie Harrison",
    job: "Barber",
    image: "/assets/images/sections/introduction/six/gallery_item_3.png",
  },
  {
    name: "John Harrison",
    job: "Sercurity",
    image: "/assets/images/sections/introduction/six/gallery_item_4.png",
  },
  {
    name: "Katie Perry",
    job: "Worker",
    image: "/assets/images/sections/introduction/six/gallery_item_5.png",
  },
  {
    name: "Max Rashford",
    job: "Barber",
    image: "/assets/images/sections/introduction/six/gallery_item_6.png",
  },
];

const IntroductionSix = () => {
  return (
    <div className="introduction-six">
      <Container>
        <SectionTitle title="Hình ảnh Organic Coffee" className="-center" />
        <div className="introduction-six-content">
          <Row gutter={[30, 30]}>
            {data.map((item) => (
              <Col xs={12} sm={12} md={6}>
                <div
                  className="introduction-six-content__item"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <main>
                    <h3>{item.name}</h3>
                    <h5>{item.job}</h5>
                    <SocialIcons className="-white" />
                  </main>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default IntroductionSix;
