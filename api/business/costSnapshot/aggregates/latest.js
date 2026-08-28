[
    { $match: { item } },
    { $sort: { snapshotDate: -1 } },
    { $limit: 1 },
]
