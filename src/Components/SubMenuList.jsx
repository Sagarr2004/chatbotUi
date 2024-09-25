// import React, { useState } from 'react';

// const SubMenuList = () => {
  
//   const recentTabs = [
//     'Tab 1',
//     'Tab 2',
//     'Tab 3',
//     'Tab 4',
//     'Tab 5',
//     'Tab 6',
//     'Tab 7',
//     'Tab 8',
//     'Tab 9',
//     'Tab 10',
//   ];


//   const [visibleTabs, setVisibleTabs] = useState(5);


//   const loadMoreTabs = () => {
//     setVisibleTabs(prev => Math.min(prev + 5, recentTabs.length));
//   };

//   return (
//     <div className="history-container">
//       <ul className="history-list">
//         {recentTabs.slice(0, visibleTabs).map((tab, index) => (
//           <li key={index} className="history-item">
//             {tab}
//           </li>
//         ))}
//       </ul>
//       {visibleTabs < recentTabs.length && (
//         <button onClick={loadMoreTabs} className="load-more-button">
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default SubMenuList;
