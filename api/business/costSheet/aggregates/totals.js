[
    { $match: { currency } },
    {
        $group: {
            _id: null,
            directCost: { $sum: '$directCost' },
            overheadCost: { $sum: '$overheadCost' },
            totalCost: { $sum: '$totalCost' },
        },
    },
]
