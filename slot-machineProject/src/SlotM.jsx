const SlotM = (props) => {
  const { x, y, z, onClick } = props;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner" onClick={onClick}>
          <h1>{x} {y} {z}</h1>
          <h1>This is matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner" onClick={onClick}>
          <h1>{x} {y} {z}</h1>
          <h1>This is not matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotM;