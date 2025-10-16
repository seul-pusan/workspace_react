const BTStyle = {
    blue : {
        base : "bg-blue-300",
        hover: "hover:bg-blue-800",
    },

    orange:{
        base : "bg-orange-300",
        hover: "hover:bg-orange-800",
    },
    lime: {
        base : "bg-lime-300",
        hover: "hover:bg-lime-800",
    },

    fuchsia: {
        base : "bg-fuchsia-300",
        hover: "hover:bg-fuchsia-800",
    }
}

export default function TailButton({color, caption, onHandle}) {
    const btstyle = BTStyle[color];
    return (
        <button className={`${btstyle.base} text-black rounded-2xl
                            ${btstyle.hover} hover:text-white hover:font-bold px-4 py-2`}

                            onClick= {onHandle}>
    
        {caption}

        </button>
       
         

    )
}

