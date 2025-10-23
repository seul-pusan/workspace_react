import TailButton from "../Components/TailButton"

export default function TrafficNav({ title, c, sel, setSel }) {
    const tag = Array.isArray(c)
        ? c.map(item => (
            <TailButton key={item}
                        caption={item}
                        color={item === sel ? "blue" : "slate"}
                        onHandle={() => setSel(item)}
            />
        ))
        : null; 


    return (
        <div className="m-3">
            <div className="text-lg font-semibold mb-3 text-gray-800 ">
                {title}
            </div>
            <div className="flex flex-wrap justify-center gap-3 ">
                {tag}
            </div>
        </div>
    )
}


