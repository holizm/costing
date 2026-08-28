[
    { $match: { costSheet } },
    {
        $group: {
            _id: null,
            total: { $sum: '$totalCost' },
        },
    },
]
