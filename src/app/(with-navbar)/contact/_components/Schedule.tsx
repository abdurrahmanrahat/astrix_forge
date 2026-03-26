"use client";

import Container from "@/components/shared/Ui/Container";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Container>
      <div className="mt-14 md:mt-20 mb-4">
        <Cal
          namespace="30min"
          calLink="astrix-forge/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{
            layout: "month_view",
            theme: "dark",
          }}
        />
      </div>
    </Container>
  );
}
