import * as React from "react";
import { useContext } from "react";
import {
  Context as RoutingContext,
  matchExactUrl,
  navigateTo
} from "./lib/routing";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarActionItem,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { TabBar, Tab } from "@rmwc/tabs";
import SettingsIcon from "./components/SettingsIcon";
import PageNotFound from "./PageNotFound";
import Feed from "./feed";
import People from "./people";
import Me from "./people";

export default function RootIndex() {
  const { state: routingState } = useContext(RoutingContext);

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <SettingsIcon />
            <TopAppBarTitle>Gitsta</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem
              icon="search"
            />
            <TopAppBarActionItem
              icon="person_add"
            />
            <TopAppBarActionItem
              icon="more_vert"
            />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <TabBar>
        <Tab onClick={() => navigateTo("/feed")}>Feed</Tab>
        <Tab onClick={() => navigateTo("/people")}>People</Tab>
        <Tab onClick={() => navigateTo("/me")}>Me</Tab>
      </TabBar>
      {matchExactUrl(routingState.url, "/feed", match => <Feed />) ||
        matchExactUrl(routingState.url, "/people", match => <People />) ||
        matchExactUrl(routingState.url, "/me", match => <Me />) || (
          <PageNotFound />
        )}
    </>
  );
}
