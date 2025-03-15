import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <div className="d-flex justify-content-center align-items-center" style={{ height: "120px" }}>
          <img className="bg-white mb-3" src={data.companylogo} alt="" style={{ maxHeight: "120px" }} />
        </div>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;