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
    },

    slate: {
        base : "bg-slate-300",
        hover: "hover:bg-slate-800",
    },

    yellow: {
        base : "bg-yellow-300",
        hover: "hover:bg-yellow-500",
    },

    purple: {
        base : "bg-purple-200",
        hover: "hover:bg-purple-500",
    },

    indigo: {
        base : "bg-indigo-200",
        hover: "hover:bg-indigo-500",
    },

    red: {
        base : "bg-red-200",
        hover: "hover:bg-red-500",
    }
}

export default function TailButton({color, caption, onHandle}) {
    const btstyle = BTStyle[color];
    return (
        <button className={`${btstyle.base} text-black
                            ${btstyle.hover} 
                            hover:text-white font-semibold rounded-xl px-5 py-2 shadow-md transition-all duration-200`}

                            onClick= {onHandle}>
    
        {caption}

        </button>
       
         

    )
}

