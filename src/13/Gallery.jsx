import TailCard from "../Components/TailCard";
import TailFind from "../Components/TailFind";
import { useRef, useState, useEffect } from 'react';

export default function Gallery() {
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const kwRef = useRef();

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_DATA_API;
        const baseUrl = '/galleryapi/B551011/PhotoGalleryService1/gallerySearchList1?';
        //const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        const kw = kwRef.current.value; 
        const url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`;

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.response.body.items.item);
    }

    const handleOk = (e) => {
        e.preventDefault();
        console.log(kwRef.current.value)
        getFetchData();
    }
    const handleCancel = (e) => {
        e.preventDefault();
        kwRef.current.value = '';
        kwRef.current.focus();
        setTag([]);
    }

    useEffect(() => {
        if (tdata.length == 0) return;

        console.log(tdata)
        let tm = tdata.map(item => <TailCard key={item.galContentId}
                                            imgUrl={item.galWebImageUrl}
                                            title={item.galTitle}
                                            subtitle={item.galPhotographyLocation}
                                            content={item.galSearchKeyword}
        />);
        // console.log(tm)
        setTag(tm);
    }, [tdata]);


    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <div className="text-3xl font-extrabold w-full flex justify-center pt-10">
                📸 한국관광공사 사진 정보 서비스
            </div>

            <div>
                <TailFind kwRef={kwRef}
                            onOk={handleOk}
                            onCancel={handleCancel} />

            </div>

            <div className="w-9/10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tag}
            </div>
        </div>
    )
}


