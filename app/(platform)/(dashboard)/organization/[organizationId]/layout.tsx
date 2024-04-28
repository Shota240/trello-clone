import React from 'react'
import { OrgControl } from './_components/org-control';

const OrganizaitonIdLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <OrgControl />
    {children}
    </>
  )
}

export default OrganizaitonIdLayout;