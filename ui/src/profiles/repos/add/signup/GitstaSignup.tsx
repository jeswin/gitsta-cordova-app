import * as React from "react";
import GitstaSignupComponent from "./components/GitstaSignup";
import HeaderWithLogo from "../../../../components/HeaderWithLogo";
import { Typography } from "@rmwc/typography";
import { useReducer } from "react";
import reducer from "./store/reducer";
import { initialState, Context } from "./store";

export default function GitstaSignup() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <HeaderWithLogo>
        <Typography use="headline4">
          Choose
          <br />a Username
        </Typography>
      </HeaderWithLogo>
      <GitstaSignupComponent />
    </Context.Provider>
  );
}
