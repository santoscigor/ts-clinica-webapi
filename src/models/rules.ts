const RegraAtendimento = (description: string) =>
    ({
        day: String(Date.now()),
        intervals: [
            {
                start: "14:30",
                end: "15:00"
            }
        ]

    })
