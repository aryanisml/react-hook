import React, { useContext } from 'react';
import UserContext  from './UserContext';

// const ContextTest = ({title}: any) => {
//      return (
//          <>
//             <span>{title}</span>
//          </>
//      )
// }
const ContextTest = () => {
    // const msg = useContext(UserContext);
    // return (
    //     // <>
    //     //     <UserContext.Consumer>
    //     //         {
    //     //             title => {
    //     //                 return <>
    //     //                     <span>{title}</span>
    //     //                 </>
    //     //             }
    //     //         }
    //     //     </UserContext.Consumer>
    //     // </>
    //     <>
    //     <span>{msg}</span>
    //     </>
    // )
    // const { username, setUser } = useContext(UserContext);
      const  {username, setUser} = useContext(UserContext);
    const clickHandler = () => {
        setUser(()=> {
            return 'Hello World';
        });
    };
    return (
        <>
            <span>{username}</span>
            <button onClick={clickHandler}>changeValue</button>
        </>
    )
}

export default ContextTest;