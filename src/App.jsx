import {SkeletonLoader} from './features/BigSkeleton';
// import {SmallSkeleton} from './features/SmallSkeleton';
export default function App(){
  return(
    <div>
      {/* <SmallSkeleton url="https://jsonplaceholder.typicode.com/posts" skeletonRows={3}/> */}
      <SkeletonLoader url ="https://jsonplaceholder.typicode.com/posts"  skeletonRows={[6,4,3,2,1,5,1]}/>
    </div>
  );
}


