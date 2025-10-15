import MyToggleBox from "./MyToggleBox"

export default function MyToggle({ color }) {

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-8/10 grid
                               grid-cols-1
                               md:grid-cols-2
                               lg:grid-cols-3
                               gap-8">
                <MyToggleBox color="blue" />
                <MyToggleBox color="orange" />
                <MyToggleBox color="lime" />
            </div>
        </div>
    )
}