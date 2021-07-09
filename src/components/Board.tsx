import useAnimatedState from "../hooks/useAnimatedState";
import Header from "./Header";
import Square from "./Square";

const Board = () => {
  const [top, setTopAnimated, setTopImmediately] = useAnimatedState(0);
  const [left, setLeftAnimated, setLeftImmediately] = useAnimatedState(0);

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid tomato",
        position: "relative",
      }}
    >
      <Header
        setTopAnimated={setTopAnimated}
        setTopImmediately={setTopImmediately}
        setLeftAnimated={setLeftAnimated}
        setLeftImmediately={setLeftImmediately}
      />
      <Square top={top} left={left} />
    </div>
  );
};

export default Board;
