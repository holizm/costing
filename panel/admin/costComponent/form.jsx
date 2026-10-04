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
        costSheet
        required
    />
    <Title />
    <Select
        costComponentType
        options={[
            'material',
            'labor',
            'overhead',
            'freight',
            'tax',
            'service',
            'other',
        ]}
        placeholder='componentType'
        required
    />
    <Numeric
        quantity
        required
    />
    <Numeric
        required
        unitCost
    />
    <Numeric
        required
        totalCost
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
