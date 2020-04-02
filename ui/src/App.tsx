import * as React from "react";
import { useContext } from "react";
import reducer from "./store/reducer";
import { initialState, Context } from "./store";
import {
  Context as RoutingContext,
  RoutingProvider,
  match,
  matchUrl
} from "./lib/routing";
import { updateRoute, navigateTo, matchExactUrl } from "./lib/routing";
import { getProfiles } from "./profiles/actions";
import Loading from "./components/Loading";
import Onboarding from "./onboarding";
import NewProfileRepo from "./profiles/repos/add";
import EditPic from "./profiles/EditPic";
import Directories from "./directories";
import PageNotFound from "./PageNotFound";
import Home from "./root";
import { Seq } from "lazily";

let appStarted = false;

window.onpopstate = (ev: any) => {
  if (appStarted) {
    updateRoute(window.location.pathname);
  }
};

function AppContents() {
  appStarted = true;

  const { state: routingState } = useContext(RoutingContext);

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const profilesFound = state.profiles && state.profiles.length > 0;

  React.useEffect(() => {
    const isOnProfileCreationPage = [
      "/onboarding",
      "/profiles/repos/add/signup",
      "/profiles/repos/add/existing"
    ].some(x => match(routingState.url, x) !== false);

    const showProfileCreation = !profilesFound && !isOnProfileCreationPage;

    if (showProfileCreation) {
      navigateTo("/onboarding");
    }

    if (state.profiles === undefined) {
      getProfiles({ state, dispatch });
    }
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      {matchExactUrl(routingState.url, "/", match => <Loading />) ||
        Seq.of(["/feed", "/people", "/me"])
          .map((url: string) =>
            matchUrl(routingState.url, url, () =>
              profilesFound ? <Home /> : <Loading />
            )
          )
          .first(x => x !== false) ||
        matchExactUrl(routingState.url, "/onboarding", match => (
          <Onboarding />
        )) ||
        matchUrl(routingState.url, "/profiles/repos/add", match => (
          <NewProfileRepo match={match} />
        )) ||
        matchExactUrl(routingState.url, "/profiles/:id/pic", match => (
          <EditPic />
        )) ||
        matchUrl(routingState.url, "/directories", match => (
          <Directories match={match} />
        )) || <PageNotFound />}
    </Context.Provider>
  );
}

export default function App() {
  return (
    <RoutingProvider>
      <AppContents />
    </RoutingProvider>
  );
}
