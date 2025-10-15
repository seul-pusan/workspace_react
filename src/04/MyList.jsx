import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"

export default function MyList() {
  const tags= MyListData.map(item => <MyListItem 
                                                key= {item.title}
                                                title={item.title} 
                                                imgUrl={item.imgUrl}
                                                content={item.content}/>) ;

    return (
        <div className=" w-4/5 grid lg:grid-cols-2 gap-4">
            {tags}
        </div>
    )
}
