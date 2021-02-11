import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './components/User';
import Page from './components/Page';
import { setYear } from './actions/PageActions';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const page = useSelector(store => store.page);
  const yearHandler = (year) => {
    dispatch(setYear(year));
  };
  console.log(page);

  return (
    <div className="app">
      <User name={user.name}/>
      <Page photos={page.photos} year={page.year} setYear={yearHandler}/>
    </div>
  );
}


// const mapStateToProps = (store) => {
//   console.log(store)
//   return {
//     user: store.user,
//     page: store.page,
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setYearAction: (year) => dispatch(setYear(year)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);