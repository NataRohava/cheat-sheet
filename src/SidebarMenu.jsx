import styled from "styled-components";
import { Link } from "react-router-dom";

const TopicsTitle = styled.p`
  margin-top: 0;
  font-weight: bold;
  font-size: 1.3em;
  color: #696969;
`;

const MenuItem = styled.p`
  padding: 2.5px;
  cursor: pointer;
  transition: background-color 0.3s, width 0.3s, font-size 0.3s;

  &:hover {
    background-color: #dff2f7; /* Цвет выделения при наведении */
    border-radius: 20px;
    width: 95%;
    margin-left: 8px;
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;
export const SidebarMenu = () => {
  return (
    <div className="menu">
      <TopicsTitle>ТЕМЫ :</TopicsTitle>

      <MenuItem>
        <StyledLink to="/virtualDom">VirtualDom</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/components">Components</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/props">Props</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/state">State(useState)</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/lifecycle">LifeCycle(useEffect)</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/events">Events</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/refs">Refs</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/fragment">Fragment</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/key">Key</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/memo">React.memo(useMemo)</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/context">Context(useContext)</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/router">React Router</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/form">Form</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/storage">STORAGEs</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/hoc">HOC</StyledLink>
      </MenuItem>
    </div>
  );
};
