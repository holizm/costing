import {
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        placeholder='costingCostSheet'
        property='costSheet'
        required
    />
    <Title />
    <Select
        options={[
            'material',
            'labor',
            'overhead',
            'freight',
            'tax',
            'service',
            'other',
        ]}
        placeholder='costingComponentType'
        property='costComponentType'
        required
    />
    <Numeric
        placeholder='costingQuantity'
        property='quantity'
        required
    />
    <Numeric
        placeholder='costingUnitCost'
        property='unitCost'
        required
    />
    <Numeric
        placeholder='costingTotalCost'
        property='totalCost'
        required
    />
    <LongText
        placeholder='costingDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
