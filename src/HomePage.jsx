import styled from "styled-components";
import roadMap from "/roadmap.jpeg";

const Map = styled.img`
  width: 100%;
  height: auto;
  max-width: 910px;
`;
export const HomePage = () => {
  return (
    <div>
      <Map src={roadMap} alt="Road map" />
    </div>
  );
};
