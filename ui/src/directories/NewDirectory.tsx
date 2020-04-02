import * as React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import NewDirectoryComponent from "./components/NewDirectory";
import { goBack } from "../lib/routing";

export default function NewDirectory() {
  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon
              icon="arrow_back_ios"
              style={{ marginLeft: "0.5em" }}
              onClick={() => goBack()}
            />
            <TopAppBarTitle>Add Directory</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <NewDirectoryComponent />
    </>
  );
}
