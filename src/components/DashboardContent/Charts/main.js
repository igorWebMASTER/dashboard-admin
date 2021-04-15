import { AreaChart, LineChart, PieChart , } from 'react-chartkick'
import 'chartkick/chart.js'

const data = {
      "2021-01-01 00:00:00 -0800": 2,
      "2021-01-01 00:01:00 -0800": 5,
     "2021-01-01 00:04:00 -0800": 9, 
     "2021-01-01 00:01:00 -0800": 15,
     "2021-01-01 00:07:00 -0800": 5,
     "2021-01-01 00:09:00 -0800": 6,
     "2021-01-01 00:05:00 -0800": 10,
     "2021-01-01 00:03:00 -0800": 9,
     "2021-01-01 00:06:00 -0800": 2,
  }

const MultiAxisLine = () => {
 return  (<>
    <div className='header'>
    </div>
    <AreaChart data={data} />
  </>)
}

export default MultiAxisLine