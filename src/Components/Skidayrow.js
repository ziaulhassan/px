import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'

export const SkiDayRow=({resort,date,powder,backcountry})=>(
<tr>
{date.getMonth()+1}/{date.getDate()}/{date.getFullYear}

 
 <td>
  {resort}
</td>
<td>
    {(powder) ? <SnowFlake/> : null}
</td>
<td>
    {(backcountry) ? <Terrain/> : null}
</td>
</tr>
)