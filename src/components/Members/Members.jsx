import { useState } from "react";

import "./Members.css";
import members from "../../data/members";
import MemberCard from "./MemberCard";

function Members() {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const selectedMember = members.find(
    (member) => member.id === selectedMemberId,
  );

  const handleSelectMember = (memberId) => {
    setSelectedMemberId((currentMemberId) =>
      currentMemberId === memberId ? null : memberId,
    );
  };

  const handleShowAll = () => {
    setSelectedMemberId(null);
  };

  return (
    <section
      id="members"
      className={`members ${selectedMember ? "members--expanded" : ""}`}
      onClick={() => {
        if (selectedMember) {
          handleShowAll();
        }
      }}
    >
      <h2 className="members__title">LOS DEL SLICE</h2>

      <div
        className={`members__grid ${
          selectedMember ? "members__grid--selected" : ""
        }`}
      >
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isSelected={member.id === selectedMemberId}
            isHidden={
              selectedMemberId !== null && member.id !== selectedMemberId
            }
            onSelect={handleSelectMember}
          />
        ))}
      </div>

      <div
        className={`member-details ${
          selectedMember ? "member-details--visible" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {selectedMember && (
          <div className="member-details__stats">
            <div className="member-stat">
              <span className="member-stat__label">HANDICAP</span>

              <span className="member-stat__value">
                {selectedMember.stats.handicap}
              </span>
            </div>

            <div className="member-stat">
              <span className="member-stat__label">AVG SCORE</span>

              <span className="member-stat__value">
                {selectedMember.stats.averageScore}
              </span>
            </div>

            <div className="member-stat">
              <span className="member-stat__label">BEST ROUND</span>

              <span className="member-stat__value">
                {selectedMember.stats.bestRound}
              </span>
            </div>

            <div className="member-stat">
              <span className="member-stat__label">ROUNDS</span>

              <span className="member-stat__value">
                {selectedMember.stats.roundsPlayed}
              </span>
            </div>

            <div className="member-stat">
              <span className="member-stat__label">BIRDIES</span>

              <span className="member-stat__value">
                {selectedMember.stats.birdies}
              </span>
            </div>

            <div className="member-stat">
              <span className="member-stat__label">LONGEST DRIVE</span>

              <span className="member-stat__value">
                {selectedMember.stats.longestDrive}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Members;
