import React from 'react'
import Spinner from './Spinner'

function CallRouteTableRow({call_route}) {
    return (typeof {call_route}?.call_route.id === 'undefined') ? <Spinner/> : 
    <tr>
        <td className="border px-4 py-2">{call_route.id}</td>
        <td className="border px-4 py-2">{call_route.name}</td>
        <td className="border px-4 py-2">{call_route.enabled ? "✔️" : "❌"}</td>
    </tr>
}

export default CallRouteTableRow