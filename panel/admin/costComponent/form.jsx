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
        placeholder='costSheet'
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
        placeholder='componentType'
        property='costComponentType'
        required
    />
    <Numeric
        placeholder='quantity'
        property='quantity'
        required
    />
    <Numeric
        placeholder='unitCost'
        property='unitCost'
        required
    />
    <Numeric
        placeholder='totalCost'
        property='totalCost'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
