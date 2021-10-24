import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

const DTable = (props) => {
    const { headers, data, setData, filter } = props
    const [filters, setFilters] = useState({})
    const [filterData, setFilterData] = useState(data)

    const handleFilter = (_name, _val) => {
        let _new = {}
        _new[_name] = _val
        setFilters(current => ({ ...current, ..._new }))
    }

    useEffect(() => {
        console.log('Aplicando filtro')
        setFilterData(data.filter(item => {
            let pass = true
            let index = 0
            while (index < headers.length) {
                let h = headers[index]
                if (filters[h.name] != undefined)
                    if (filters[h.name].length > 0) {
                        if (!item[h.name].includes(filters[h.name])) {
                            pass = false
                            break
                        }
                    }
                index++
            }
            if (pass) return item          
        }))
    }, [filters, data])

    return (<table className="table  table-striped">
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
                filterData.length > 0 ? filterData.map(item => <tr>
                    {
                        headers.map(h => <td>
                            {h.component ? h.component(item) : item[h.name]}
                        </td>)
                    }
                </tr>) : <></>
            }
        </tbody>
    </table>)
}

export default DTable