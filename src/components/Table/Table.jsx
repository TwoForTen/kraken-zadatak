import { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import { useDispatch } from 'react-redux';
import styles from './table.module.scss';

import { fetchUsers } from '../../store/Users/actions';
import { openModal } from '../../store/Modal/actions';
import useTableData from '../../hooks/useTableData';

import up from '../../assets/up.svg';
import down from '../../assets/down.svg';

const Table = () => {
  const dispatch = useDispatch();
  const { columns, data } = useTableData();

  const [page, setPage] = useState(1);
  const [results, setResults] = useState(10);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data }, useSortBy);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchUsers(page, results));
  }, [page, results, dispatch]);

  return (
    <>
      <div className={styles.root}>
        <div className={styles.tableWrap}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps(), {
                        className: column.collapse ? 'collapse' : '',
                      })}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <img src={up} alt="up" />
                          ) : (
                            <img src={down} alt="down" />
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => dispatch(openModal(row.original))}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps({
                            className: cell.column.collapse ? 'collapse' : '',
                          })}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage(1)} disabled={page <= 1}>
          {'<<'}
        </button>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          {'<'}
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>{'>'}</button>
        <select
          value={results}
          onChange={(e) => {
            setResults(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
