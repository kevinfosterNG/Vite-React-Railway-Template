import React from 'react'

function CallRoutesNew(props) {
  const fields = props.schemas.find(x => x.id === props.schema) ? props.schemas.find(x => x.id === props.schema).fields : [];
  
  return (
    <div id="addCallRoute" className='container mx-auto'>
      <h2>New Call Route:</h2>
      <hr/>
    <form onSubmit={(e) => {console.log("submitting..."); }} action="/api/call_routes" method="post" className='bg-slate-50' >
        <textarea required type="text" name="newCallRoute" 
          //  defaultValue={fields}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."'></textarea>
        <input type="submit"></input>
    </form>
    </div>
  )
}

export default CallRoutesNew