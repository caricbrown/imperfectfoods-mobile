import { render } from "@testing-library/react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const renderWithReactQuery = (children: JSX.Element) => {
    const queryClient = new QueryClient();
    return render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>);
}