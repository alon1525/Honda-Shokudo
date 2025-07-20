import React from 'react';
import chef1 from '../image/chef1.png';
import chef2 from '../image/chef2.png';


function Team() {
  const teamMembers = [
    { id: 1, name: 'Chef', image: chef1 },
    { id: 2, name: 'Chef', image: chef2 },
  ];

  return (
    <div className="team" id="Team">
      <h1>
        Our<span>Team</span>
      </h1>

      <div className="team_box">
        {teamMembers.map(member => (
          <div className="profile" key={member.id}>
            <img src={member.image} alt={member.name} />

            <div className="info">
              <h2 className="name">{member.name}</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
