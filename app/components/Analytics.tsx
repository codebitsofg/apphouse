import React, { useEffect } from "react";
import posthog from "posthog-js";

const Analytics = () => {
  useEffect(() => {
    posthog.init("phc_tmSrVsoefVa2I8G2ctXoD5U8mh6az42O9ZDUi8r0mSh", {
      api_host: "https://us.i.posthog.com",
      person_profiles: "always",
    });
  }, []);
  return <></>;
};

export default Analytics;
