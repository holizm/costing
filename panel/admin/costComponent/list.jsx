import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>costingCostComponent</th>
    <th>coreComponentType</th>
    <th>costingQuantity</th>
    <th>coreUnitCost</th>
    <th>coreTotalCost</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.costComponentType}</td>
    <td>{item.quantity}</td>
    <td>{item.unitCost}</td>
    <td>{item.totalCost}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
