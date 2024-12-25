import React from "react";

const TeamSection = () => (
  <div className="site-section custom-border-bottom" data-aos="fade">
    <div className="container">
      <h2 className="text-center">The Team</h2>
      <div className="row">
        {[
          { name: "Elizabeth Graham", role: "CEO/Co-Founder", img: "images/person_1.jpg" },
          { name: "Jennifer Greive", role: "Co-Founder", img: "images/person_2.jpg" },
          { name: "Patrick Marx", role: "Marketing", img: "images/person_3.jpg" },
          { name: "Mike Coolbert", role: "Sales Manager", img: "images/person_4.jpg" },
        ].map((member, idx) => (
          <div className="col-md-3 text-center" key={idx}>
            <img src={member.img} alt={member.name} className="mb-4" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TeamSection;
