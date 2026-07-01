import React from 'react'

function Contacts() {
    const data = [
        {type:'Contacts US',emaill:"Ashvaniyadav21437@gmail.com",mob:"+919598740026",name:'Email',Mobi:'Mobile No.',fb:"Facebook",ins:"Instragram",you:"Youtube",x:"Twitter"},
        {type:'Group of Company',emaill:"https://www.cleartrip.com/",name:"ClearTrip",mob:"https://www.Myntra.com/",Mobi:"Myntra",link:'https://www.shopsy.in/',fb:"Shopsy"},
        {type:"Help",name:"Payments",Mobi:"Shipping",fb:"FAQ"}
    ]
  return (
    <div className='w-full h-full bg-black text-white grid grid-cols-5'>
        {data.map((ele,index)=>(
            <div key={index} className='w-52 h-60 mt-2 mx-5 rounded-md overflow-hidden'>
                <h1 className='font-semibold'>{ele.type}</h1>
                <a className='' target='_blank' href={ele.emaill} >{ele.name}</a> <br />
                <a href={ele.mob} target='_blank'>{ele.Mobi}</a><br />
                <a href={ele.link} target="_blank">{ele.fb} </a><br />
                <a href="" target="_blank">{ele.ins}</a><br />
                <a href=''target="_blank" >{ele.you}</a><br />
                <a href="" target="_blank">{ele.x}</a>
            </div>
        ))}
    </div>
  )
}

export default Contacts