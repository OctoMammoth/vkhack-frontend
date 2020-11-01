import MainPagesUganda from "./pages/mainPagesUganda";
import Courses from "./pages/courses";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import myCourses from "./pages/myCourses";
import Login from "./pages/login";
import Register from './pages/register'
import CoursePage from './pages/coursePage'
import MyCoursePage from './pages/mycourse'
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPagesUganda} exact />
        <Route path="/Courses" component={Courses} />
        <Route path="/course/:id" component={CoursePage} />
        <Route path="/myCourse/:id" component={MyCoursePage} />
        <Route path="/MyCourses" component={myCourses} />
        <Route path="/LogIn" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
