import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
import img from "./image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users?fbclid=IwAR0pb0gS5EY6dQ974QwEufSCVhoSsH9ZIzsei9XiYG_L0OQnj6_RpOtZHrM"
      )
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div>
        <Carousel>
          {user.map((u) => (
            <CarouselItem interval={1000}>
              {/* <img className="d-block w-100" src={img} alt="First slide"/> */}
              <img
                className="d-block w-100"
                src="https://www.pngmagic.com/product_images/dusty-blue-background-images-free-download-pngmagic.jpg"
                alt={""}
              />
              <Carousel.Caption>
                
                <h3>Name : {u.name}</h3>
                <h3>Email : {u.email}</h3>
                <p>Street :{u.address.street}</p>
                <p>Suite : {u.address.suite}</p>
                <p>City : {u.address.city}</p>
              </Carousel.Caption>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
