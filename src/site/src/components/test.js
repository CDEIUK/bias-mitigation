import React from "react"
import { useTable, useFilters } from "react-table"
import { useStaticQuery, graphql } from "gatsby"

export default function Test() {
  const { allGooglePeTsusecaserepositorySheet } = useStaticQuery(
    graphql`
      query {
        allGooglePeTsusecaserepositorySheet {
          nodes {
            uniqueId
            who
            sector
            description
            stageOfDev
          }
        }
      }
    `
  )

  const data = allGooglePeTsusecaserepositorySheet.nodes

  const columns = React.useMemo(
    () => [
      {
        Header: "Who",
        accessor: "who",
        disableFilters: true,
      },
      {
        Header: "Sector",
        accessor: "sector",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Description",
        accessor: "description",
        disableFilters: true,
      },
      {
        Header: "Stage of development",
        accessor: "stageOfDev",
        disableFilters: true,
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
                <th {...column.getHeaderProps()}>
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
