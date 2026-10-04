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
        item
        required
    />
    <Numeric
        quantity
        required
    />
    <Numeric
        directCost
        required
    />
    <Numeric overheadCost />
    <Numeric
        required
        totalCost
    />
    <Numeric
        required
        unitCost
    />
    <Text
        currency
        required
    />
    <DateTime
        effectiveDate
        required
    />
    <Boolean current />
</>

export default <DialogForm inputs={inputs} />
