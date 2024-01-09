import { useDevToolsPluginClient } from "expo/devtools";
import { useEffect } from "react";
export function useInspectAppState() {
    const client = useDevToolsPluginClient("inspect-app-state");
    useEffect(() => {
        const subscriptions = [];
        subscriptions.push(client?.addMessageListener("ping", (data) => {
            alert(`Received ping from ${data.from}`);
        }));
        client?.sendMessage("ping", { from: "app" });
        return () => {
            for (const subscription of subscriptions) {
                subscription?.remove();
            }
        };
    }, [client]);
}
//# sourceMappingURL=useInspectAppState.js.map