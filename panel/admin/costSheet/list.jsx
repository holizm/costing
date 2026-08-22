import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>costingCostSheet</th>
    <th>costingItem</th>
    <th>costingTotalCost</th>
    <th>costingUnitCost</th>
    <th>costingEffectiveDate</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.item?.title}</td>
    <td>{item.totalCost}</td>
    <td>{item.unitCost}</td>
    <DateTime value={item.effectiveDate} />
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
