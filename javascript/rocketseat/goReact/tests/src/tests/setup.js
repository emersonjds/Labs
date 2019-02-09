import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "./mocks/localStorage";

Enzyme.configure({ adapter: new Adapter() });
