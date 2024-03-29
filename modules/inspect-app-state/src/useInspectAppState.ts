import { useDevToolsPluginClient, type EventSubscription } from "expo/devtools";
import { useEffect } from "react";

export function useInspectAppState() {
  const client = useDevToolsPluginClient("inspect-app-state");

  useEffect(() => {
    const subscriptions: EventSubscription[] = [];

    subscriptions.push(
      client?.addMessageListener("ping", (data) => {
        alert(`Received ping from ${data.from}`);
      }),
    );
    client?.sendMessage("ping", { from: "app" });

    return () => {
      for (const subscription of subscriptions) {
        subscription?.remove();
      }
    };
  }, [client]);
}
