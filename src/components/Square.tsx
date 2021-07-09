interface SquareProps {
  top: number;
  left: number;
}
const Square: React.FC<SquareProps> = ({ top, left }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        backgroundColor: "cornflowerblue",
        left: `${left}px`,
        top: `${top}px`,
      }}
    ></div>
  );
};

export default Square;
