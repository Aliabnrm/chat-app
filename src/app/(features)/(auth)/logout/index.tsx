"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Logout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: 'POST' })
    router.push("/sign-in")
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  )
}

export default Logout
