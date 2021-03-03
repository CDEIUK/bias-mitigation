import React from "react"
import { useTable, useFilters } from "react-table"

export default function RepositoryTable() {
  const data = require("../data/repository.json")

  const columns = React.useMemo(
    () => [
      {
        Header: "Who",
        accessor: "who",
        disableFilters: true,
        minWidth: 200,
      },
      {
        Header: "Sector",
        accessor: "sector",
        Filter: SelectColumnFilter,
        filter: "includes",
        minWidth: 200,
      },
      {
        Header: "Description",
        accessor: "description",
        disableFilters: true,
        minWidth: 450,
      },
      {
        Header: "Stage of development",
        accessor: "stage-of-dev",
        disableFilters: true,
        minWidth: 200,
      },
      {
        Header: "PETs used",
        accessor: "pets1",
        Cell: ({ row }) => (
          <div>
            <p>{row.original.pets1}</p>
            <p>{row.original.pets2}</p>
            <p>{row.original.pets3}</p>
          </div>
        ),
        Filter: SelectPetsFilter,
        id: "pets1",
        id2: "pets2",
        id3: "pets3",
        filter: petsCustomFilterFn,
        minWidth: 200,
      },
      {
        Header: "Supporting links",
        Cell: ({ row }) => (
          <div>
            <p>
              <a href={row.original.link1URL}>{row.original.link1}</a>
            </p>
            <p>
              <a href={row.original.link2URL}>{row.original.link2}</a>
            </p>
            <p>
              <a href={row.original.link3URL}>{row.original.link3}</a>
            </p>
          </div>
        ),
        disableFilters: true,
        minWidth: 300,
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

  function SelectPetsFilter({
    column: { filterValue, setFilter, preFilteredRows, id, id2, id3 },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        if (row.values[id] !== "") {
          options.add(row.values[id])
        }
        if (row.values[id2]) {
          options.add(row.values[id2])
        }
        if (row.values[id3]) {
          options.add(row.values[id3])
        }
      })
      return [...options.values()]
    }, [id, id2, id3, preFilteredRows])

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

  function petsCustomFilterFn(rows, id, filterValue) {
    return rows.filter(row => {
      return (
        row.original["pets1"] === filterValue ||
        row.original["pets2"] === filterValue ||
        row.original["pets3"] === filterValue
      )
    })
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
                <th
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth },
                  })}
                >
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
