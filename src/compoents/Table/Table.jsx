import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const DTable = (props) => {
    const { headers, data, filter } = props
    const [filters, setFilters] = useState({})
    const [filterData, setFilterData] = useState(data)
    const [paginateData, setPaginateData] = useState([])
    const [pagination, setPagination] = useState({
        currentPage: 0,
        pagesNumber: 1,
        cuantityPerPage: 10
    })

    //Pagination
    useEffect(() => {

        let totalItems = filterData.length
        let pagesTotal = Math.ceil(totalItems / pagination.cuantityPerPage)
        let currentIndex = pagination.currentPage * pagination.cuantityPerPage
        setPagination(current => ({ ...current, pagesNumber: pagesTotal }))
        let tempArray = []
        for (let i = currentIndex; i < (currentIndex + pagination.cuantityPerPage); i++) {
            if (filterData[i] != undefined) tempArray.push(filterData[i])
        }
        setPaginateData(tempArray)
    }, [filterData, pagination.currentPage])

    const nextPage = () => {
        console.log(pagination.currentPage + '-' + pagination.pagesNumber)
        if ((pagination.currentPage + 1) < pagination.pagesNumber)
            setPagination(current => ({ ...current, currentPage: current.currentPage++ }))
    }

    const previousPage = () => {
        if (pagination.currentPage > 0)
            setPagination(current => ({ ...current, currentPage: current.currentPage-- }))
    }

    const goToPage = (_index) => {
        if (pagination.currentPage != _index)
            setPagination(current => ({ ...current, currentPage: _index }))
    }

    const renderPagination = () => {
        let paginationButtons = [];
        for (let i = 0; i < pagination.pagesNumber; i++) {
            paginationButtons.push(
                <li class={pagination.currentPage === i ? "page-item active" : "page-item"}>
                    <a class="page-link" href='javascript:void(0)' onClick={() => { goToPage(i) }}>{i + 1}</a>
                </li>)
        }
        return <>
            {paginationButtons}
        </>
    }

    //Filter
    const handleFilter = (_name, _val) => {
        let _new = {}
        _new[_name] = _val
        setFilters(current => ({ ...current, ..._new }))
    }

    const itemFilter = item => {
        let pass = true
        let index = 0
        while (index < headers.length) {
            let h = headers[index]
            if (filters[h.name] != undefined)
                if (filters[h.name].length > 0) {
                    if (item[h.name] === undefined) {
                        item[h.name] = ''
                    }
                    if (!item[h.name].toString().toLowerCase().includes(filters[h.name].toString().toLowerCase())) {
                        pass = false
                    }
                }
            index++
        }
        return pass
    }


    useEffect(() => {
        setFilterData(data.filter(itemFilter))
    }, [filters, data])



    return (<table className={`${props.className}`}>
        <thead>
            <tr>

                {
                    headers.map(item => (
                        <th>{item.label ? item.label : item.name}</th>
                    ))
                }
            </tr>
            {
                filter ? <tr>
                    {
                        headers.map(item => (
                            <th> <input type="text" value={filters[item.name]}
                                onChange={({ target }) => handleFilter(item.name, target.value)}
                                class="form-control" />
                            </th>
                        ))
                    }
                </tr> : <></>
            }
        </thead>
        <tbody>
            {
                paginateData.length > 0 ? paginateData.map(item => <tr>
                    {
                        headers.map(h => <td>
                            {h.component ? h.component(item) : item[h.name]}
                        </td>)
                    }
                </tr>) : <></>
            }
        </tbody>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {
                    pagination.pagesNumber > 1 ? <>
                        <li class="page-item"><a class="page-link" href='javascript:void(0)' onClick={previousPage}><BsArrowLeft /></a></li>
                        {
                            renderPagination()
                        }
                        <li class="page-item"><a class="page-link" href='javascript:void(0)' onClick={nextPage}><BsArrowRight /></a></li>
                    </> : <></>
                }

            </ul>
        </nav>
    </table>)
}

export default DTable