import React from 'react'


function MailingList() {
  return (
    <form className="grid grid-flow-row auto-rows-max space-y-1 p-2 rounded bg-red-100">
      <label className="">✉ Mailing List</label>
      <span className="text-base">Get an exlusive recipe and see new content first 👀</span>
      <input className="p-1 rounded" placeholder="your@email.com" />
      <input className="p-1 rounded" type="submit" value="Sign up" />
    </form>
  )
}

export default MailingList
