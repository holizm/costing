export default ({ costSheet }) => <dl class='costSummary'>
    <dt class='title'>{costSheet.title}</dt>
    <dd class='totalCost'>{costSheet.totalCost}</dd>
    <dd class='unitCost'>{costSheet.unitCost}</dd>
    <dd class='currency'>{costSheet.currency?.title}</dd>
</dl>
