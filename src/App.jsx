import { useEffect, useState } from 'react';
import classes from './assets/skeleton.module.scss';

// eslint-disable-next-line react/prop-types
const Items = ({rowNum})=>{
  let array2 = [];
  for(let i =0 ; i<rowNum; i++){
    array2.push(<div className={classes.item} key={i}></div>)
  }
  return (
      <div className={classes.items}>
        {array2}
      </div>
  );
}

// eslint-disable-next-line react/prop-types
const SkeletonLoader = ({url, skeletonRows})=>{
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const getData = await response.json();
      const saveData = getData.map((item)=>(
        item.title
      ))
      setIsLoading(false);
      setItems(saveData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(items);
  
  useEffect(()=>{
    setTimeout(()=>{
      fetchData()
    },3000)
  },[])

  let array = [];
  // eslint-disable-next-line react/prop-types
  for(let i=0; i<skeletonRows.length; i++){
    array.push(<Items rowNum ={skeletonRows[i]} key={i}/>)
  }
  return(
    <>
      {isLoading?(
        <div style={{display: 'flex',justifyContent: 'center'}}>
          <div className={classes.container}>
           {array}
         </div>
        </div>
      ):(
        <ul>
          {items.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
      )}
    </>
  );
}
export default function App(){
  return(
    <div>
      <SkeletonLoader url ="https://jsonplaceholder.typicode.com/posts"  skeletonRows={[6,4,3,2,1,5,1]}/>
    </div>
  );
}

