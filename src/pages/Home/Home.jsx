import React, { useRef, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
    const [category, setCategory] = useState('all')
    const targetRef = useRef(null);
    const scrollToTarget = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div>
        <Header onScrollClick={scrollToTarget} />
        <ExploreMenu refProp={targetRef} category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
    </div>
  )
}

export default Home