import React from 'react'
import NavbarCompo from '../../components/Navbar';
import TradingViewWidget from '../../components/ChartCompo/TradingViewWidget';

export const StockCharts = () => {
  return (
    <div id="dashboard">
      <NavbarCompo />
      <TradingViewWidget/>
    </div>
  )
}
