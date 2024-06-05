import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Deadlines from "../Components/Deadlines";
import { Link } from "react-router-dom";
import ChatbotComponent from "../chatbot/ChatbotComponent";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Banner />

      {/* Displaying Bot */}

      {/* <div className=" fixed bottom-4 right-4 ">
      <ChatbotComponent />
      </div> */}

      <div>
        {!isVisible && (
          <button
            className="fixed bottom-4 right-4 z-10"
            onClick={toggleVisibility}
          >
            <FaRobot size={50} color="black" />
          </button>
        )}
        {isVisible && (
          <div className="fixed bottom-4 right-4 z-20">
            <ChatbotComponent />
          </div>
        )}
      </div>

      {/* Displaying Bot */}
      <div className="w-[60%] ml-auto mr-auto mb-32">
        <h1 className=" mt-5 underline  font-bold mb-5  text-2xl ">
          Registration Rules :
        </h1>
        <div>
          <ul>
            <li>
              <p>
                For FYP-1 registration you have to meet the eligibility
                criteria.
              </p>
            </li>
            <li>
              <p>
                An FYP group must consists of either 2 or 3 members{" "}
                <span className=" text-red-600 text-bold ">
                  (cross department groups are allowed)
                </span>
                . A group size of 3 members from same degree program is
                preferable.
              </p>
            </li>
            <li>
              <p>
                If any FYP group is taking a project with an external
                supervisor, then it MUST has an internal supervisor, who is a
                faculty member of the Fast School of Computing. The registration
                form has to be signed by the internal supervisor for registering
                an FYP. Signature of the external supervisor will not entitle a
                student for FYP registration.
              </p>
            </li>
          </ul>
        </div>
        <h1 className=" mt-5 underline font-bold mb-5  text-2xl ">
          Eligibility Criteria :
        </h1>
        <p>A student must have</p>
        <ul>
          <li>
            <p>
              The CGPA greater than or equal to 2.0{" "}
              <span className=" text-red-600 text-bold ">
                (not on academic warning)
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className=" text-red-600 text-bold ">No deficiency: </span>
              Earned credit hours greater than or equal to 100.
            </p>
          </li>
          <li>
            <p>
              <span className=" text-red-600 text-bold ">
                One course deficiency:{" "}
              </span>
              Earned credit hours greater than or equal to 96. .
            </p>
          </li>
          <li>
            <p>
              <span className=" text-red-600 text-bold ">
                Two courses deficiency:{" "}
              </span>
              Earned credit hours greater than or equal 92.
            </p>
          </li>
        </ul>
        <h1 className=" mt-5 underline  font-bold mb-5  text-2xl ">
          Registration Process for FYP-1 :
        </h1>
        <h2>
          Once you get the email from FYP coordination committee about opening
          of FYP registration do the following:{" "}
        </h2>

        <p>
          1. Fill and Submit the online registration form FYP-1 Online
          Registration Form.{" "}
          <span className=" text-red-600 text-bold ">
            (Only one form per group needs to be submitted.)
          </span>{" "}
        </p>

        <p>
          2. Fill out the FYP-1 Registration Form, (only) get it signed by the
          internal supervisor at your earliest and submit it to the FSC Academic
          Office. You are not required to get HoD's signatures and FYP
          coordinator's on the form, the department will do it once you submit
          the form.{" "}
          <span className=" text-red-600 text-bold ">
            {" "}
            (Only one form per group needs to be submitted. This form should
            contain details of all the group members).
          </span>{" "}
        </p>
        <p>
          3. FYP group members who have no deficiency will have to register
          themselves through Flex also. Department will not register them on
          Flex.{" "}
        </p>
        <p>
          4.FYP Group members who have one course deficiency have to write the
          registration approval request to HOD, this application is to be
          submitted along with the FYP registration form that contains whole
          group’s information. Also attach your transcripts with your
          application. You can use the template application from here.{" "}
        </p>
        <h1 className=" text-blue-500 cursor-pointer hover:text-blue-900 ">
          <Link to="/deadlines">Project Deadlines</Link>
        </h1>
        <div className="App">{/* Other components */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
