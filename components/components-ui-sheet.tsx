'use client'

import React, { useState } from 'react'

interface SheetProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

export const Sheet: React.FC<SheetProps> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export const SheetTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  return <>{children}</>
}

export const SheetContent: React.FC<{ children: React.ReactNode; side?: 'left' | 'right' }> = ({ children }) => {
  return <>{children}</>
}