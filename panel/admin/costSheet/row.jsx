import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.item?.title}</td>
    <td>{item.totalCost}</td>
    <td>{item.unitCost}</td>
    <DateTime value={item.effectiveDate} />
</>
