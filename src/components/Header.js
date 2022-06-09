import PropTypes from "prop-types";
import React from "react";

const Header = (props) => (
  <header className="top">
    <div className="wrap">
      <div className="Header-content">
        <div className="header-rating">
          <div className="header-rating_tag">Рейтинг:</div>
          <div className="header-rating_icon">★★★★★</div>
        </div>

        <hr></hr>

        <div className="header-divider"></div>
        <h1 className="font-effect-fire-animation">{props.title}</h1>
        <h3>
          <span className="hot-delivery">
            Быстрая доставка горячих
            <span className="sub-header">#бургеров</span>
          </span>
        </h3>
      </div>
    </div>
  </header>
);

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <div className="wrap">
//           <div className="Header-content">
//             <div className="header-rating">
//               <div className="header-rating_tag">Рейтинг:</div>
//               <div className="header-rating_icon">★★★★★</div>
//             </div>

//             <hr></hr>

//             <div className="header-divider"></div>
//             <h1 className="font-effect-fire-animation">Hot Burgers</h1>
//             <h3>
//               <span className="hot-delivery">
//                 Быстрая доставка   горячих
//                 <span className="sub-header">#бургеров</span>
//               </span>
//             </h3>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
