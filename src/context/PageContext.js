import { createContext, useState } from "react";

export const PageContext = createContext({
  currentPage: "home",
  setCurrentPage: () => {},
});

const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  console.log(currentPage);
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
