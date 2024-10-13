import React from 'react'


const Stats = [
    {count:"5K",label:"Active Students"},
    {count:"10+",label:"Mentors"},
    {count:"200+",label:"Courses"},
    {count:"50+",label:"Awards"},
]

const StatsComponent = () => {
  return (
    <div>
      <section>
        <div>
            <div className=' flex flex-row gap-x-8'>
                {
                    Stats.map((data,index)=>{
                        return (
                            <div key={index}>
                                <h1>
                                    {data.count}
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                             </div>   
                        )
                    })
                }
            </div>
        </div>
      </section>
    </div>
  )
}

export default StatsComponent
