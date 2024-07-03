import axios from 'axios'
import { ListRequest, ListType } from '../types/api/list'


const getList = async (params: ListRequest): Promise<ListType> => {
    const res = await axios.get<ListType>("https://api.github.com/repos/facebook/create-react-app/issues", { params })
    return res.data
  }


// api가 많으면 이런식으로 처리해도 되는데 우선은 하나니까 axios를 여기서 처리하기로 결정
//   const fetch = axios.create({
//     baseURL: process.env,
//   });


export default { getList }
