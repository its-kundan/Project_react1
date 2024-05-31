// import Card from './Card';
import styles from './timeline.module.css';

const YearBox = ()=>{
  return (
    <div className="year-box" >

    </div>
  )
}

const Pillar = ()=>{
  return (
    <div className="pillar" >

    </div>
  )
}

const EventCard = ({heading,discription})=>{
  return (
    <div className="eventcard">
      <div> {heading}</div>
      <div> {discription}</div>
    </div>
  )
}

const Timeline=({events})=>{
  return (
    <div className=''>
      <YearBox/>
      {events.map((event,key)=>
      <Fragment key ={key}>
        <div

      </Fragment>
      )}
    </div>
  )
}










// const timeline = () => {
  

// const timelineData = [
//   {
//     year: '2000',
//     title: 'Organised Classroom',
//     description: 'Classroom organised ',
//     icon: 'paper-plane',
//     color: '#007bff',
//   },
//   {
//     year: '2001',
//     title: 'Computer Lab',
//     description: 'Digitalisation with Computers.',
//     icon: 'inbox',
//     color: '#17a2b8',
//   },
//   {
//     year: '2002',
//     title: 'TLabs and Laboratory',
//     description: 'Practicle knowledge',
//     icon: 'calendar',
//     color: '#ffc107',
//   },
//   {
//     year: '2003',
//     title: 'Sport Ground',
//     description: 'Sport Ground with football, cricket, kabbaddi',
//     icon: 'thumbs-up',
//     color: '#dc3545',
//   },
//   {
//     year: '2004',
//     title: 'Transport',
//     description: 'Bus and Magic services available',
//     icon: 'globe',
//     color: '#6f42c1',
//   },
// ];


//   return(
//     <div className={styles.timeline}>
//       {timelineData.map((card,index)=>(
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   )
// };
export default timeline;