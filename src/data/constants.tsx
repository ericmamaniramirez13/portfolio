import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
import Amazon from "../assets/amazon.jpg";
import mrcooper from "../assets/mrcooper.jpg";
import byui from "../assets/byui.jpg";
import project1 from "../assets/project1.png"
import project2 from "../assets/googlecolab.jpg"
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  google: Google,
  verizon: Verizon,
  amazon: Amazon,
  mrcooper: mrcooper,
  brighamyounguniversityidaho: byui
};

export enum Constants {
  USERNAME = "Eric Mamani",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "mathmobileapplication": project1,
  "machinelearningtextgeneratorauthorsstyle": project2
};
