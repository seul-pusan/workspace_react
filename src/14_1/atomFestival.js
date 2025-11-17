import { atom } from "jotai";
export const selGuAtom = atom(null);
export const festivalFetchData = atom(async () => {
    const apikey = import.meta.env.VITE_DATA_API;
    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
    const url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.getFestivalKr.item;
});