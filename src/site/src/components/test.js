import React from "react"
import { useTable, useFilters } from "react-table"
// import { useStaticQuery, graphql } from "gatsby"

export default function Test() {
  const data = require('./data.json');

  const columns = React.useMemo(
    () => [
      {
        Header: "Who",
        accessor: "who",
        disableFilters: true,
        minWidth: 200
      },
      {
        Header: "Sector",
        accessor: "sector",
        Filter: SelectColumnFilter,
        filter: "includes",
        minWidth: 200
      },
      {
        Header: "Description",
        accessor: "description",
        disableFilters: true,
        minWidth: 450 
      },
      {
        Header: "Stage of development",
        accessor: "stage-of-dev",
        disableFilters: true,
        minWidth: 200
      },
      {
        Header: "PETs",
        accessor: "tech",
        Filter: SelectColumnFilter,
        filter: "includes",
        minWidth: 200
      },
      {
        Header: "Links to resources",
        Cell: ({ row }) =>
        <div>
          <p><a href={row.original.link1URL}>{row.original.link1}</a></p>
          <p><a href={row.original.link2URL}>{row.original.link2}</a></p>
          <p><a href={row.original.link3URL}>{row.original.link3}</a></p>
        </div>,
        disableFilters: true,
        minWidth: 300
      },
    ],
    []
  )

  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: SelectColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters
  )

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps({
                   style: {minWidth : column.minWidth}
               })}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div></div>
    </div>
  )
}
