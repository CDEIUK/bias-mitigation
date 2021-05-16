import React from "react"
import { useTable, useFilters } from "react-table"

export default function AdoptionGuideRepositoryTable(props) {
  const dataLoad = require("../data/repository.json")
  const data = dataLoad.filter(a => a[props.pet] == "x")

  const columns = React.useMemo(
    () => [
      {
        Header: "Who",
        accessor: "who",
        disableFilters: true,
        minWidth: 150,
      },
      // {
      //   Header: "Sector",
      //   accessor: "sector",
      //   Filter: SelectColumnFilter,
      //   filter: "includes",
      //   minWidth: 200,
      // },
      // {
      //   Header: "Location",
      //   accessor: "country",
      //   Filter: SelectColumnFilter,
      //   filter: "includes",
      //   minWidth: 200,
      // },
      {
        Header: "Description",
        accessor: "description",
        disableFilters: true,
        minWidth: 100,
        textAlign: "justify",
        fontSize: "12px",
      },
      // {
      //   Header: "Stage of development",
      //   accessor: "stage-of-dev",
      //   Filter: SelectColumnFilter,
      //   filter: "includes",
      //   minWidth: 200,
      // },
      // {
      //   Header: "PETs used",
      //   accessor: "pets1",
      //   Cell: ({ row }) => (
      //     <div>
      //       <p>
      //         <a
      //           href={
      //             row.original.pets1 === "Homomorphic Encryption"
      //               ? "/pets/glossary#homomorphic-encryption"
      //               : row.original.pets1 === "Trusted Execution Environment"
      //               ? "/pets/glossary#trusted-execution-environments"
      //               : row.original.pets1 === "Multi-party Computation"
      //               ? "/pets/glossary#multi-party-computation"
      //               : row.original.pets1 === "Federated Analytics"
      //               ? "/pets/glossary#federated-analytics"
      //               : row.original.pets1 === "Differential Privacy"
      //               ? "/pets/glossary#differential-privacy"
      //               : row.original.pets1 === "De-identification techniques"
      //               ? "/pets/glossary#de-identification-techniques"
      //               : null
      //           }
      //         >
      //           {row.original.pets1}
      //         </a>
      //       </p>
      //       <p>
      //         <a
      //           href={
      //             row.original.pets2 === "Homomorphic Encryption"
      //               ? "/pets/glossary#homomorphic-encryption"
      //               : row.original.pets2 === "Trusted Execution Environment"
      //               ? "/pets/glossary#trusted-execution-environments"
      //               : row.original.pets2 === "Multi-party Computation"
      //               ? "/pets/glossary#multi-party-computation"
      //               : row.original.pets2 === "Federated Analytics"
      //               ? "/pets/glossary#federated-analytics"
      //               : row.original.pets2 === "Differential Privacy"
      //               ? "/pets/glossary#differential-privacy"
      //               : row.original.pets2 === "De-identification techniques"
      //               ? "/pets/glossary#de-identification-techniques"
      //               : null
      //           }
      //         >
      //           {row.original.pets2}
      //         </a>
      //       </p>
      //       <p>
      //         <a
      //           href={
      //             row.original.pets3 === "Homomorphic Encryption"
      //               ? "/pets/glossary#homomorphic-encryption"
      //               : row.original.pets3 === "Trusted Execution Environment"
      //               ? "/pets/glossary#trusted-execution-environments"
      //               : row.original.pets3 === "Multi-party Computation"
      //               ? "/pets/glossary#multi-party-computation"
      //               : row.original.pets3 === "Federated Analytics"
      //               ? "/pets/glossary#federated-analytics"
      //               : row.original.pets3 === "Differential Privacy"
      //               ? "/pets/glossary#differential-privacy"
      //               : row.original.pets3 === "De-identification techniques"
      //               ? "/pets/glossary#de-identification-techniques"
      //               : null
      //           }
      //         >
      //           {row.original.pets3}
      //         </a>
      //       </p>
      //     </div>
      //   ),
      //   id: "pets1",
      //   id2: "pets2",
      //   id3: "pets3",
      //   minWidth: 250,
      //   disableFilters: true,
      // },
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
        minWidth: 200,
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
                  return (
                    <td
                      {...cell.getCellProps({
                        style: {
                          "text-align": cell.column.textAlign
                            ? cell.column.textAlign
                            : "center",
                          "font-size": cell.column.fontSize
                            ? cell.column.fontSize
                            : "",
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  )
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
