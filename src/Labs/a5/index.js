import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href={`${process.env.REACT_APP_BASE_URL}/a5/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
      {/* <SimpleAPIExamples /> */}
    </div>
  );
}
export default Assignment5;
