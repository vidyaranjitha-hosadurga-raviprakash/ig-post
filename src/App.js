import { CubeImage } from "./components";

export const App = () => {
  return (
    <div
      className="ui raised text very padded container"
      style={{
        width: "50%",
        margin: "auto",
        display: "block",
      }}
    >
      <CubeImage></CubeImage>
    </div>
  );
};
