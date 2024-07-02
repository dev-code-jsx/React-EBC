import React from 'react'
import { HelpInfo } from '../../components/help/HelpInfo'
import { TransferTable } from '../../components/transferForm/TransferTable'
import { TransferMForm } from '../../components/transferForm/TransferMForm'
export const TestDashboard = () => {
  return (
    <div>
      <HelpInfo/>
      <TransferMForm/>
    </div>
  )
}
