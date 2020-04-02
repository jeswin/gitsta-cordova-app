import * as React from "react";
import PageNotFound from "../../../PageNotFound";
import { matchExactUrl, MatchResult } from "../../../lib/routing";
import GitstaSignup from "./signup/GitstaSignup";
import ExistingRepo from "./existing/ExistingRepo";

export default function AddRepoIndex({ match }: { match: MatchResult }) {
  return (
    matchExactUrl(match.currentPath, "/signup", match => <GitstaSignup />) ||
    matchExactUrl(match.currentPath, "/existing", match => (
      <ExistingRepo />
    )) || <PageNotFound />
  );
}
