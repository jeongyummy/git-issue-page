import './List.module.scss'
import gitIssueApi from "../../api/list.api"
import { ListRequest, ListType } from '../../types/api/list'
import { useEffect } from 'react'
import { listType } from '../../types/views/list.view'
import styles from '../list/List.module.scss'

function List() {

    useEffect(() => {
        getList();
    }, [])

    const getList = async () => {
        const requestParam: ListRequest = {
            owner: "facebook",
            repo: "create-react-app",
        }
        const result = await gitIssueApi.getList(requestParam)
        modifiedData(result);
    };
    
    const modifiedData = (data: ListType): void => {
        const issueList: listType[] = [];

        // 테이블 관련 데이터
        data.items.forEach((item) => {
            const rowData: listType = {
                id: item.id,
                number: item.number,
                title: item.title,
                created_at: item.created_at,
                comments: item.comments
            }
            issueList.push(rowData)
            return issueList
          })
    }
     return (
        <>
        <div className={styles.listWrapper}>
            <div className={styles.listContainer}>
                <div className={styles.titleArea}>
                    <h1> Issue List</h1>
                </div>
                <div className={styles.listArea}>
                </div>
            </div>
        </div>
        </>
    )
}

export default List
