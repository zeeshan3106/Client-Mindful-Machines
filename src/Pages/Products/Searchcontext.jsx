import React, { createContext, useState } from 'react'

// In your SearchContext file
export const SearchContext = createContext({ pro: false, setpro: () => {} });
export const SearchProvider = ({ children }) => { 

  const [pro, setpro] = useState([ ]);


  return (
    <SearchContext.Provider value={{ pro, setpro }}>
      {children} 
    </SearchContext.Provider>
  );
}


export default SearchProvider;