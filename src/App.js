import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Category from "./components/Category";
import RecipeDetail from "./components/RecipeDetail";

import useContentful from "./hook/use-contentful";
import { Route, Switch } from "react-router-dom";

function App() {
  const { breakfast, salad, appetizer, errors } = useContentful();

  const displayloader = () => {
    if (errors) {
      return <span>{errors.map((error) => error.message).join(",")}</span>;
    }
    if (!breakfast && !salad && !appetizer) {
      return <span>Loading......</span>;
    }
  };

  return (
    <div className="App">
      <Header />
      <Main>
        {displayloader()}
        {breakfast && salad && appetizer && (
          <Switch>
            <Route exact path="/">
              <Category
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
            <Route path="/:category/:id?">
              <RecipeDetail
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
          </Switch>
        )}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
