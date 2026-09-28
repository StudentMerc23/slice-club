import { useState } from "react";

import "./Members.css";
import members from "../../data/members";
import MemberCard from "./MemberCard";

function Members() {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [activeTab, setActiveTab] = useState("stats");

  const selectedMember = members.find(
    (member) => member.id === selectedMemberId,
  );

  const handleSelectMember = (memberId) => {
    if (selectedMemberId === memberId) {
      setSelectedMemberId(null);
      setActiveTab("stats");
      return;
    }

    setSelectedMemberId(memberId);
    setActiveTab("stats");
  };

  const handleShowAll = () => {
    setSelectedMemberId(null);
    setActiveTab("stats");
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
          <>
            <div className="member-details__tabs">
              <button
                type="button"
                className={`member-tab ${
                  activeTab === "stats" ? "member-tab--active" : ""
                }`}
                onClick={() => setActiveTab("stats")}
              >
                ESTADÍSTICAS
              </button>

              <button
                type="button"
                className={`member-tab ${
                  activeTab === "bag" ? "member-tab--active" : ""
                }`}
                onClick={() => setActiveTab("bag")}
              >
                Club Set
              </button>
            </div>

            <div className="member-details__panel">
              {/* ESTADÍSTICAS */}
              <div
                className={`member-tab-panel ${
                  activeTab === "stats"
                    ? "member-tab-panel--active"
                    : "member-tab-panel--left"
                }`}
                aria-hidden={activeTab !== "stats"}
              >
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
                    <span className="member-stat__label">SCORING GOAL</span>
                    <span className="member-stat__value">
                      {selectedMember.stats.roundsPlayed}
                    </span>
                  </div>

                  <div className="member-stat">
                    <span className="member-stat__label">PAR OR BETTER</span>
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
              </div>

              {/* CLUB SET */}
              <div
                className={`member-tab-panel ${
                  activeTab === "bag"
                    ? "member-tab-panel--active"
                    : "member-tab-panel--right"
                }`}
                aria-hidden={activeTab !== "bag"}
              >
                <div className="member-details__bag">
                  <div className="bag-item">
                    <span className="bag-item__label">DRIVER</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.driver}
                    </span>
                  </div>

                  <div className="bag-item">
                    <span className="bag-item__label">WOODS</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.woods}
                    </span>
                  </div>

                  <div className="bag-item">
                    <span className="bag-item__label">IRONS</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.irons}
                    </span>
                  </div>

                  <div className="bag-item">
                    <span className="bag-item__label">WEDGES</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.wedges}
                    </span>
                  </div>

                  <div className="bag-item">
                    <span className="bag-item__label">PUTTER</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.putter}
                    </span>
                  </div>

                  <div className="bag-item">
                    <span className="bag-item__label">BALL</span>
                    <span className="bag-item__value">
                      {selectedMember.bag.ball}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Members;
