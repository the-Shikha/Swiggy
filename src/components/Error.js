import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err=useRouteError()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
        <h2 className='"bg-white p-6 rounded-xl shadow-lg text-lg text-red-600 border border-red-300 w-80"'>{err.status} : {err.statusText}</h2>
      <h1 className="text-6xl font-bold text-orange-500 mb-4">Oops!!!</h1>
      <h2 className="text-xl text-gray-700 mb-2">Something went wrong...</h2>
    </div>
  )
}

export default Error
