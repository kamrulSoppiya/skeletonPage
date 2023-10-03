import classes from '../assets/smallSkeleton.module.scss';
export const SmallSkeleton = ({skeletonRows})=>{
  let array = [];

  for(let i =0; i<skeletonRows; i++){
    array.push(<div className={classes.items} key={i}></div>);
  }
  return(
    <div className={classes.container}>
      {array}
    </div>
  );
}

