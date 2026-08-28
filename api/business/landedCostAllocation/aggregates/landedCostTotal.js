[
    { $match: { landedCost } },
    {
        $group: {
            _id: null,
            total: { $sum: '$allocatedAmount' },
        },
    },
]
