import {
    Boolean,
    DateTime,
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='item'
        property='item'
        required
    />
    <Numeric
        placeholder='quantity'
        property='quantity'
        required
    />
    <Numeric
        placeholder='directCost'
        property='directCost'
        required
    />
    <Numeric
        placeholder='overheadCost'
        property='overheadCost'
    />
    <Numeric
        placeholder='totalCost'
        property='totalCost'
        required
    />
    <Numeric
        placeholder='unitCost'
        property='unitCost'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <DateTime
        placeholder='effectiveDate'
        property='effectiveDate'
        required
    />
    <Boolean
        placeholder='current'
        property='current'
    />
</>

export default <DialogForm inputs={inputs} />
