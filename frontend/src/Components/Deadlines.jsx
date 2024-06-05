import React from "react";

const Deadlines = () => {
  return (
    <>
      <h1 className=" items-center text-center text-3xl text-blue-700  mt-10 ">FYP-1 Deliverable Deadlines and Details</h1>
     

      <div className="overflow-x-auto w-[70%] ml-auto mr-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className=" text-2xl font-bold " >Deliverable Name</th>
              <th className=" text-2xl font-bold ">Due</th>
              <th className=" text-2xl font-bold ">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>D1</th>
              <td  >Project Proposal</td>
              <td>3rd week</td>
              <td>Fri-Feb 09, 2024</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>D2</th>
              <td>Proposal Defence</td>
              <td>5th Week</td>
              <td>Fri-Feb 23, 2024</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>D3</th>
              <td>Software Requirement Specifications</td>
              <td>7th Week</td>
              <td>Fri-Mar 08, 2024</td>
            </tr>
             {/* row 4 */}
             <tr>
              <th>D4</th>
              <td>Literature Review and Elaboration of Problem</td>
              <td>9/10th Weekt</td>
              <td>Fri-Mar 22-29, 2024</td>
            </tr>
             {/* row 5 */}
             <tr>
              <th>D5</th>
              <td>Mid Evaluations</td>
              <td>14th Week</td>
              <td>Fri-Apr 26, 2024</td>
            </tr>
             {/* row 6 */}
             <tr>
              <th>D6</th>
              <td> Software Requirement Specifications and Methodology</td>
              <td>16th Week</td>
              <td>Fri-Apr 26, 2024</td>
            </tr>
             {/* row 7 */}
             <tr>
              <th>D7</th>
              <td>  Submission of signed FYP report to Academic Office</td>
              <td>17th Week</td>
              <td>Fri-may 26, 2024</td>
            </tr>
            {/* row 8 */}
            <tr>
              <th>D7</th>
              <td> FYP Final Evaluations</td>
              <td>After Final Exams</td>
              <td>Wed-Jun 12, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className=" items-center text-center text-3xl text-blue-700  mt-10 ">Documents Templets</h1>
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Deadlines;
