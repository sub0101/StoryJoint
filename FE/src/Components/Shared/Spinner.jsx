import React from 'react'
import { Spin } from 'antd'
function Spinner() {
    const [spinning, setSpinning] = React.useState(true);
    // const [percent, setPercent] = React.useState(0);

   
   

  return (
    // <Spin spinning={spinning}  fullscreen />
          <Spin tip="Loading" fullscreen></Spin>

  )
}

export default Spinner