"use client";
import React, { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientShit,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientShit client={queryClient}>{children}</ReactQueryClientShit>
  );
};

export default QueryClientProvider;
