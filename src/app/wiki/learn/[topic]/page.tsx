"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

export default function LearnPage() {

  const path = usePathname();

  return (
    <div>{path}</div>
  )
}
