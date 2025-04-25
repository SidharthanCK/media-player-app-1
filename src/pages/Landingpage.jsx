import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import {useNavigate}from "react-router-dom"
function Landingpage() {

  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            welcome to <span className="text-warning">Media-Player </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            explicabo enim non sunt at adipisci? Inventore ab debitis unde
            praesentium distinctio, neque, tempore nesciunt fugiat aliquid,
            ipsam soluta voluptatibus odit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex quod non, blanditiis esse fugiat ea
            voluptates in vitae nemo, eligendi recusandae explicabo minima
            voluptatem ipsam nihil nam quam dicta dignissimos!
          </p>
          <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        </Col>
        <Col lg={5}>
          <img src="https://cdn.wallpapersafari.com/48/16/IBxM6V.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className="text-warning" style={{ fontSize: "40px" }}>
          Features
        </h5>

        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              src="https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/BCB10M/gallery-of-media-of-multimedia-images-BCB10M.jpg"
            />
            <Card.Body>
              <Card.Title className="text-danger fw-bolder">
                Managing Videos
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              src="https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/BCB10M/gallery-of-media-of-multimedia-images-BCB10M.jpg"
            />
            <Card.Body>
              <Card.Title className="text-danger fw-bolder">
                Categorized Videos
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"300px"}
              src="https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/BCB10M/gallery-of-media-of-multimedia-images-BCB10M.jpg"
            />
            <Card.Body>
              <Card.Title className="text-danger fw-bolder">
                Watch History
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container border rounded p-4 border-lighter mt-5 d-flex justify-content-center align-items-center">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple ,Powerful & Fast</h4>
          <h6 className="mb-5 mt-4">
            {" "}
            <span className="text-warning">Categorized Videos</span> : Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla
            nemo dolorum illum? Reiciendis tempore, quas est eveniet facere
            fugit, non aperiam facilis aut libero voluptatum fugiat odit magnam
            similique.{" "}
          </h6>
          <h6 className="mb-5 mt-4">
            {" "}
            <span className="text-warning">Categorized Videos</span> : Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla
            nemo dolorum illum? Reiciendis tempore, quas est eveniet facere
            fugit, non aperiam facilis aut libero voluptatum fugiat odit magnam
            similique.{" "}
          </h6>
          <h6 className="mb-5 mt-4">
            {" "}
            <span className="text-warning">Categorized Videos</span> : Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla
            nemo dolorum illum? Reiciendis tempore, quas est eveniet facere
            fugit, non aperiam facilis aut libero voluptatum fugiat odit magnam
            similique.{" "}
          </h6>
        </div>

        <div className="col-lg-5 ms-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/75UARAvy_zI?si=8JZcgUgNRN0YZDQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
