"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// State
type TopbarState = {
  activeHref: string | null;
};

// Actions
type TopbarAction = { type: "SET_ACTIVE"; href: string } | { type: "CLEAR_ACTIVE" };

// Reducer
function topbarReducer(state: TopbarState, action: TopbarAction): TopbarState {
  switch (action.type) {
    case "SET_ACTIVE":
      return { ...state, activeHref: action.href };
    case "CLEAR_ACTIVE":
      return { ...state, activeHref: null };
    default:
      return state;
  }
}

// Context
type TopbarContextValue = {
  state: TopbarState;
  setActive: (href: string) => void;
  clearActive: () => void;
};

const TopbarContext = createContext<TopbarContextValue | null>(null);

// Provider
export function TopbarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(topbarReducer, { activeHref: null });

  const setActive = (href: string) => dispatch({ type: "SET_ACTIVE", href });
  const clearActive = () => dispatch({ type: "CLEAR_ACTIVE" });

  return (
    <TopbarContext.Provider value={{ state, setActive, clearActive }}>
      {children}
    </TopbarContext.Provider>
  );
}

// Hook
export function useTopbar() {
  const ctx = useContext(TopbarContext);
  if (!ctx) throw new Error("useTopbar must be used inside TopbarProvider");
  return ctx;
}
