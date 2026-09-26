function MemberCard({ member, isSelected, isHidden, onSelect }) {
  return (
    <button
      className={`member-card
        ${isSelected ? "member-card--selected" : ""}
        ${isHidden ? "member-card--hidden" : ""}
      `}
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onSelect(member.id);
      }}
    >
      <img
        className="member-card__image"
        src={member.image}
        alt={`${member.firstName} ${member.lastName}`}
      />

      <div className="member-card__name">
        <span>{member.firstName}</span>
        <span>{member.lastName}</span>

        {member.nickname && (
          <span className="member-card__nickname">aka "{member.nickname}"</span>
        )}
      </div>
    </button>
  );
}

export default MemberCard;
