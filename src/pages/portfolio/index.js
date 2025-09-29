import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            // choose thumbnail: prefer thumbnail, then first screenshot, then img
            const thumb =
              data.thumbnail ||
              (data.screenshots && data.screenshots[0]) ||
              data.img ||
              "";

            return (
              <div key={data.id ?? i} className="po_item">
                <div className="thumb_wrap">
                  <img
                    src={thumb}
                    alt={data.title ?? `project-${i}`}
                    className="thumb_img"
                    loading="lazy"
                  />
                </div>

                <div className="content">
                  {data.title && <h3>{data.title}</h3>}
                  <p>{data.shortDescription}</p>

                  <div className="links_row">
                    <Link to={data.link} className="project-link">
                      view project
                    </Link>

                    {data.live && (
                      <a
                        className="live-link"
                        href={data.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: 12 }}
                      >
                        live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
