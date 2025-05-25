import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='menu-section' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='menu-section-description'>
        BALTS piedāvā suši, salātus, maizītes, zupas, siltos u.c. ēdienus.Izmantojot sous-vide jeb lēnas pagatavošanas metodi, varam pasniegt ēdienu, kam nav pievienotas liekas taukvielas, tas ir saglabājis savu uzturvērtību un sniedz nepieciešamo enerģiju. Pats svarīgākais – BALTS ēdiens tiek pasniegts videi draudzīgā iepakojumā. Ātri, ērti un atbildīgi.
      </p>
      <div className="menu-category-list">
        {menu_list.map((item, index) => {
            return (
                <div 
                  onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                  key={index}
                  className='menu-category-item'>
                    <img src={item.menu_image} className={category === item.menu_name ? "selected-category" : ""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
)

}

export default ExploreMenu
