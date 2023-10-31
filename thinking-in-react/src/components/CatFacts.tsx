import {useEffect, useState} from "react";

export function CatFacts() {
    const [facts, setFacts] = useState<string[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchFacts = async () => {
            setLoading(true)
            const response = await fetch("https://meowfacts.herokuapp.com/")
            const data = await response.json()
            setFacts(data.data)
            setLoading(false)
        }
        fetchFacts()
    }, []);

    useEffect(() => {
        console.log(facts)
    }, [facts]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!facts.length) {
        return <div>No data</div>
    }

    return (
        <div>
            {facts.map((fact, index) => (
                <div key={index}>{fact}</div>
            ))}
        </div>
    )
}