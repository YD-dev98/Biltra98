function AssignmentItem({ assignment }) {
  return (
    <div className="assignment-item">
      <h4>{assignment.companyName}</h4>
      <span>
        <strong>Datum: </strong>{" "}
        {assignment.pickupDate.toDate().toLocaleDateString()}
      </span>
      <span>
        <strong>Telefonnummer: </strong>
        {assignment.companyPhone}
      </span>{" "}
      <span>
        <strong>Kontaktperson: </strong>
        {assignment.companyContact}
      </span>
      <span>
        <strong>Upphämtningsadress: </strong>
        {assignment.pickupAdress}
      </span>
      <span>
        <strong>Avlämningsadress: </strong>
        {assignment.dropoffAdress}
      </span>
      <span>
        <strong>Reg-nummer: </strong>
        {assignment.carReg}
      </span>
    </div>
  );
}

export default AssignmentItem;