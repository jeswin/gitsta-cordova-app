import * as React from "react";
import { useEffect, useReducer } from "react";
import { Context, initialState } from "./store";
import reducer from "./store/reducer";
import { MatchResult, matchExactUrl } from "../lib/routing";
import { loadDirectories } from "./actions";
import Home from "./Home";
import NewDirectory from "./NewDirectory";
import PageNotFound from "../PageNotFound";
import Directory from "./Directory";

export default function DirectoriesIndex({ match }: { match: MatchResult }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadDirectories({ state, dispatch });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {matchExactUrl(match.currentPath, "/", match => <Home />) ||
        matchExactUrl(match.currentPath, "/new", match => <NewDirectory />) ||
        matchExactUrl(match.currentPath, "/:id", match => <Directory />) || (
          <PageNotFound />
        )}
    </Context.Provider>
  );
}
