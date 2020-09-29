import React, {createContext, Dispatch, useState, useEffect, useContext} from 'react';

const  UserContext = createContext<Partial<TypeSafe>>({});

export default UserContext;

export type TypeSafe = {
    username  ?: string;
    setUser ? :any;
}

type Props= {
    children : React.ReactNode;
}

export const UserContextProvider = ({ children }: Props) => {
     const [username, setUser] = useState('Hello Swapnil');

     useEffect(()=>{
        setUser(()=> 'Hello Facebook');
     },[]);

      return (
          <UserContext.Provider value={{username, setUser}}>
              {children}
          </UserContext.Provider>
      ); 
};
