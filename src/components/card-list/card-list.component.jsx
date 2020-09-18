import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component.jsx';

// export const CardList = (props) => {
//   if (!props.monsters) return <div />;

//   return (
//     <div className="cards">
//       {
//         props.monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })
//       }
//     </div>
//   );
// };

export const CardList = (props) => (
  <div className="cards">
    {props.monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
