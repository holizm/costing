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
        placeholder='coreDirectCost'
        property='directCost'
        required
    />
    <Numeric
        placeholder='coreOverheadCost'
        property='overheadCost'
    />
    <Numeric
        placeholder='coreTotalCost'
        property='totalCost'
        required
    />
    <Numeric
        placeholder='coreUnitCost'
        property='unitCost'
        required
    />
    <Text
        placeholder='costingCurrency'
        property='currency'
        required
    />
    <DateTime
        placeholder='coreEffectiveDate'
        property='effectiveDate'
        required
    />
    <Boolean
        placeholder='costingCurrent'
        property='current'
    />
</>

export default <DialogForm inputs={inputs} />
