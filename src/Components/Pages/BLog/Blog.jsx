import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <h2 className=" text-center text-3xl  font-bold mt-16 mb-8">
        Question And Ans
      </h2>
      <div className="font-semibold gap-5">
        <p>1 .Differences between uncontrolled and controlled components?</p>
        <br />
        <p>
          <small>
            Uncontrolled components are form elements that store their own state
            internally. This means that their values are managed by the browser,
            rather than by React. When a user interacts with an uncontrolled
            component, the component updates its own state and renders the
            updated value automatically. You can still retrieve the value of an
            uncontrolled component using a ref.
          </small>
        </p>
        <br />
        <p>2.How to validate React props using PropTypes? </p>
        <br />
        <p>
          <small>
            PropTypes is a package that provides runtime type checking for React
            props. It helps to catch bugs and errors earlier in the development
            process by checking that the props passed to a component match the
            expected type and shape.
          </small>
        </p>
        <br />
        <p>3. Difference between nodejs and express js?</p>
        <br />
        <p>
          <small>
            Node.js is a runtime environment, while Express.js is a web
            framework built on top of Node.js. Node.js provides a runtime
            environment for executing JavaScript code outside of a web browser,
            while Express.js provides a set of tools and features for building
            web applications using Node.js.Node.js has a larger ecosystem of
            packages and tools, while Express.js has a smaller, more focused
            ecosystem of packages and tools specifically for building web
            applications.
          </small>
        </p>
        <br />
        <p>4. What is a custom hook, and why will you create a custom hook?</p>
        <br />
        <p>
          <small>
            A custom hook in React is a JavaScript function that starts with the
            prefix "use" and allows developers to extract reusable logic from a
            component and share it across multiple components. Custom hooks
            enable developers to write reusable code that can be shared across
            different components without the need for duplicating the same code.
            They can be used to encapsulate complex logic and stateful
            functionality, allowing developers to simplify their components and
            make them more reusable and maintainable.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Blog;
