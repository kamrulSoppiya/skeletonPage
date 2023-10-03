import classes from '../assets/mobileskeleton.module.scss';
// eslint-disable-next-line react/prop-types
export const Mobileskeleton = ({skeletonRows}) => {

  function dynamicStyles(i){
    return{
      height: skeletonRows ? `${skeletonRows[i]}px` : '40px',
      width: skeletonRows ? `${skeletonRows[i]}px` : '40px', 
      backgroundColor: '#E4E5E7',
    }
  }
  const array = [];
  // eslint-disable-next-line react/prop-types
  for(let i =0; i<skeletonRows.length; i++){
    array.push(<div key={i} className={`${classes.items}`} style={dynamicStyles(i)}></div>);
  }
  return (
    <div className={classes.container}>
        {array}
    </div>
  )
}


