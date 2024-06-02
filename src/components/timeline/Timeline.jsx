const Timeline =({events})=>{
  return (
    <div className =" flex flex-col gap-y-3 w-full my-4"> 
      <Circle />
      {events.map(event,key)=>{
        <Fragment key = {key}>
           <div className="grid grid-cols-[1fr-auto-1fr] gap-x-2 items-center mx-auto">
            {event.direction === 'left' ?Circle(
              <EventCard heading = events={.heading} subHeading = {event.subHeading} />
            ) :(
              <div></div>
            )
            }
           </div>
           {key<(events.length-1) && <Circle />}
        </Fragment>
      }}

      <Circle />

    </div>
  )
}

const Circle = () => {
  return (<div className="rounded-full w-4 h-4 bg-blue-500 mx-auto">

  </div>)
}

const Pillar =() =>{
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto">

    </div>

  )
}

const EventCard =({heading, subHeading}) =>{
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-x1 p-4">
      <div className ="text-blue-800 font-bold text-lg border-b"> {heading}</div>
      <div className = "text-sm text-gray-700"> {subHeading}</div>
    </div>
  )
}


export default Timeline;