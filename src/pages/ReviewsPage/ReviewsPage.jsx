import React, { useState } from "react";
import { Form, Field } from "formik";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Stars, StarButton, Container, FormContainer } from "./Reviews.styled";
import reviews from "../../reviews.json";
const ReviewsPage = () => {
  const starArr = [1, 2, 3, 4, 5];
  const [totalPositiveStars, setTotalPositiveStars] = useState(1);
  console.log(totalPositiveStars);

  const [feedback, setFeedback] = useState([]);
  console.log(feedback);

  const handleSubmit = (values, { resetForm }) => {
    setFeedback([...feedback, { ...values, totalPositiveStars }]);
    setTotalPositiveStars(1);
    resetForm();
  };
  const handleClick = (e, index) => {
    e.preventDefault();
    return setTotalPositiveStars(index + 1);
  };

  return (
    <Container>
      <FormContainer
        initialValues={{
          name: "",
          comment: "",
          totalPositiveStars: totalPositiveStars,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <Field
              type="text"
              id="comment"
              name="comment"
              placeholder="Enter your comment"
            />
          </div>
          <div>
            <Stars>
              {starArr.map((el, index) => (
                <IconContext.Provider
                  key={index}
                  value={{
                    color: `${index >= totalPositiveStars ? "#ccc" : "orange"}`,
                  }}
                >
                  <StarButton
                    type="button"
                    onClick={(e) => handleClick(e, index)}
                  >
                    <AiFillStar />
                  </StarButton>
                </IconContext.Provider>
              ))}
            </Stars>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </FormContainer>

      <ul>
        {reviews?.map((item) => (
          <li>
            <p>{item.name}</p>
            <p>{item.comment}</p>
            <Stars>
              {starArr.map((el, index) => (
                <IconContext.Provider
                  key={index}
                  value={{
                    color: `${
                      index >= item.totalPositiveStars ? "#ccc" : "orange"
                    }`,
                  }}
                >
                  <AiFillStar />
                </IconContext.Provider>
              ))}
            </Stars>
          </li>
        ))}
      </ul>
      {/* <Stars>
        {starArr.map((el, index) => (
          <IconContext.Provider
            key={index}
            value={{
              color: `${index >= totalPositiveStars ? "#ccc" : "orange"}`,
            }}
          >
            <AiFillStar />
          </IconContext.Provider>
        ))}
      </Stars> */}
    </Container>
  );
};

export default ReviewsPage;
