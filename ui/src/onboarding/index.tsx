import * as React from "react";
import { Link, navigateTo } from "../lib/routing";
import HeaderWithLogo from "../components/HeaderWithLogo";
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";

export default function Onboarding() {
  return (
    <>
      <HeaderWithLogo>
        <Typography use="headline4">
          Get
          <br />
          Started
        </Typography>
      </HeaderWithLogo>
      <p style={{ textAlign: "center" }}>
        To create a profile and to store data, <br />
        you need something called a <em>git repository</em>.
      </p>
      <div style={{ textAlign: "center" }}>
        <p>
          <Button
            onClick={() => navigateTo("/profiles/repos/add/signup")}
            raised
            label="Create It"
          />
        </p>
        <p>OR</p>
        <p>
          <Link href="/profiles/repos/add/existing">I'll do this myself</Link>
          &nbsp; (advanced)
          <br />
          Lets you use github, gitlab etc.
        </p>
      </div>
    </>
  );
}
