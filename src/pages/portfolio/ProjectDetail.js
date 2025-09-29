import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = dataportfolio.find((p) => p.id === id);

  // Build an array of images (from screenshots, thumbnail or img) and dedupe
  const rawImages =
    (project &&
      (project.screenshots && project.screenshots.length > 0
        ? project.screenshots
        : project.thumbnail
        ? [project.thumbnail]
        : project.img
        ? [project.img]
        : [])) ||
    [];

  // Remove falsy and duplicate values (preserves order)
  const images = rawImages
    .filter(Boolean)
    .map((s) => (typeof s === "string" ? s.trim() : s))
    .filter((v, i, a) => a.indexOf(v) === i);

  const [current, setCurrent] = useState(0);

  // Keep current index safe when images change
  useEffect(() => {
    if (current >= images.length) setCurrent(0);
  }, [images.length, current]);

  return (
    <HelmetProvider>
      <Container className="pt-4 pb-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {project
              ? `${project.title} | ${meta.title}`
              : `Project | ${meta.title}`}
          </title>
          <meta
            name="description"
            content={project ? project.description : meta.description}
          />
        </Helmet>

        {!project ? (
          <div style={{ padding: 40 }}>
            <h2>Project not found</h2>
            <p>
              We couldn't find that project. It might have been removed or the
              URL is incorrect.
            </p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        ) : (
          <div className="project-detail">
            <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>
              ← Back
            </button>

            <h1>{project.title}</h1>

            {/* Gallery */}
            <div className="project-gallery">
              {images && images.length > 0 ? (
                <>
                  <div className="main-image-wrap">
                    <img
                      src={images[current]}
                      alt={`${project.title} screenshot ${current + 1}`}
                      className="main-image"
                    />
                  </div>

                  {images.length > 1 && (
                    <div className="thumbs" role="list">
                      {images.map((src, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`thumb-btn ${
                            idx === current ? "active" : ""
                          }`}
                          onClick={() => setCurrent(idx)}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <img
                            src={src}
                            alt={`thumb-${idx}`}
                            className="thumb-img"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p>No images available.</p>
              )}
            </div>

            <p style={{ fontSize: 18, marginTop: 18 }}>{project.description}</p>

            {/* optional tech stack and links */}
            {project.stack && (
              <div style={{ marginTop: 12 }}>
                <strong>Tech:</strong> {project.stack.join(" • ")}
              </div>
            )}

            {project.live && project.live !== "#" && (
              <p style={{ marginTop: 12 }}>
                Live demo:{" "}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.live}
                </a>
              </p>
            )}

            {project.github && (
              <p style={{ marginTop: 8 }}>
                Source:{" "}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.github}
                </a>
              </p>
            )}
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default ProjectDetail;
