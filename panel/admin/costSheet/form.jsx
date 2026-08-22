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
        placeholder='costingItem'
        property='item'
        required
    />
    <Numeric
        placeholder='costingQuantity'
        property='quantity'
        required
    />
    <Numeric
        placeholder='costingDirectCost'
        property='directCost'
        required
    />
    <Numeric
        placeholder='costingOverheadCost'
        property='overheadCost'
    />
    <Numeric
        placeholder='costingTotalCost'
        property='totalCost'
        required
    />
    <Numeric
        placeholder='costingUnitCost'
        property='unitCost'
        required
    />
    <Text
        placeholder='costingCurrency'
        property='currency'
        required
    />
    <DateTime
        placeholder='costingEffectiveDate'
        property='effectiveDate'
        required
    />
    <Boolean
        placeholder='costingCurrent'
        property='current'
    />
</>

export default <DialogForm inputs={inputs} />
